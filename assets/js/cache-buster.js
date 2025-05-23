// 清除浏览器缓存
(function() {
    // 生成一个基于当前时间的随机查询参数，确保每次都是新的
    const cacheBuster = Date.now();
    
    // 刷新图片缓存的函数
    function refreshImageCache() {
        const imgElements = document.querySelectorAll('img[src^="assets/images/"]');
        
        // 刷新所有图片
        imgElements.forEach(img => {
            const originalSrc = img.getAttribute('src');
            
            // 添加或更新查询参数
            const newSrc = originalSrc.includes('?') 
                ? originalSrc.replace(/\?v=\d+/, `?v=${cacheBuster}`)
                : `${originalSrc}?v=${cacheBuster}`;
            
            // 重新设置src属性，强制浏览器重新加载图片
            img.setAttribute('src', newSrc);
            
            // 确保图片填充整个容器
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
        });
        
        console.log(`图片缓存已刷新，版本标记: ${cacheBuster}`);
    }
    
    // 在DOM加载完成后刷新缓存
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // 初次加载时刷新
            refreshImageCache();
            
            // 再次延迟刷新，确保动态生成的内容也被处理
            setTimeout(refreshImageCache, 500);
        });
    } else {
        // 如果DOM已经加载完成，立即刷新
        refreshImageCache();
        
        // 再次延迟刷新，确保动态生成的内容也被处理
        setTimeout(refreshImageCache, 500);
    }
})();
