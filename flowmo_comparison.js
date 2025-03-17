function createImageComparison(originalPath, method1Path, method2Path, Method1Name, Method2Name) {
    // Create a wrapper for the entire comparison block
    const wrapper = document.createElement('div');
    wrapper.classList.add('comparison-block');

    // Create the image-pair container
    const pairContainer = document.createElement('div');
    pairContainer.classList.add('image-pair');
    pairContainer.style.display = 'flex';
    pairContainer.style.alignItems = 'center';
    pairContainer.style.justifyContent = 'center';

    // Original image container
    const origContainer = document.createElement('div');
    origContainer.classList.add('image-container', 'original-container');
    origContainer.style.flex = '1';
    origContainer.style.position = 'relative';
    origContainer.style.height = '100%';
    
    const origTitle = document.createElement('div');
    origTitle.classList.add('comparison-title');
    origTitle.innerText = 'Original Image';
    
    const origImg = document.createElement('img');
    origImg.src = originalPath;
    origImg.alt = 'Original Image';
    origImg.style.width = '100%';
    origImg.style.height = 'auto';
    origImg.style.display = 'block';
    
    origContainer.appendChild(origImg);
    origContainer.appendChild(origTitle);

    // Reconstructed image container with relative positioning
    const reconContainer = document.createElement('div');
    reconContainer.classList.add('image-container', 'reconstructed-container');
    reconContainer.style.position = 'relative';
    reconContainer.style.flex = '1';
    reconContainer.style.height = '100%';
    
    const reconTitle = document.createElement('div');
    reconTitle.classList.add('comparison-title');
    reconTitle.innerText = 'Reconstructed Image';

    // Create a container for both method images to ensure proper sizing
    const methodImagesContainer = document.createElement('div');
    methodImagesContainer.style.position = 'relative';
    methodImagesContainer.style.width = '100%';
    methodImagesContainer.style.paddingTop = '0'; // Will be set dynamically based on original image aspect ratio

    // Method 1 overlay - will be visible on the right side of the slider
    const methodOneDiv = document.createElement('div');
    methodOneDiv.classList.add('method-one');
    methodOneDiv.style.position = 'absolute';
    methodOneDiv.style.top = '0';
    methodOneDiv.style.left = '0';
    methodOneDiv.style.width = '100%';
    methodOneDiv.style.height = '100%';
    methodOneDiv.style.zIndex = '1';
    
    const methodOneImg = document.createElement('img');
    methodOneImg.src = method1Path;
    methodOneImg.alt = 'Method 1 Reconstruction';
    methodOneImg.style.width = '100%';
    methodOneImg.style.height = '100%';
    methodOneImg.style.objectFit = 'cover';
    methodOneDiv.appendChild(methodOneImg);

    // Method 2 overlay - will be visible on the left side of the slider
    const methodTwoDiv = document.createElement('div');
    methodTwoDiv.classList.add('method-two');
    methodTwoDiv.style.position = 'absolute';
    methodTwoDiv.style.top = '0';
    methodTwoDiv.style.left = '0';
    methodTwoDiv.style.width = '100%';
    methodTwoDiv.style.height = '100%';
    methodTwoDiv.style.zIndex = '1';
    
    const methodTwoImg = document.createElement('img');
    methodTwoImg.src = method2Path;
    methodTwoImg.alt = 'Method 2 Reconstruction';
    methodTwoImg.style.width = '100%';
    methodTwoImg.style.height = '100%';
    methodTwoImg.style.objectFit = 'cover';
    methodTwoDiv.appendChild(methodTwoImg);

    // Divider element
    const divider = document.createElement('div');
    divider.classList.add('divider');
    divider.style.position = 'absolute';
    divider.style.top = '0';
    divider.style.bottom = '0';
    divider.style.width = '2px';
    divider.style.backgroundColor = 'white';
    divider.style.zIndex = '3';
    
    // Method 1 title overlay - separate from method div to control occlusion
    const methodOneTitle = document.createElement('div');
    methodOneTitle.classList.add('method-title');
    methodOneTitle.innerText = Method1Name;
    methodOneTitle.style.position = 'absolute';
    methodOneTitle.style.bottom = '10px';
    methodOneTitle.style.right = '10px';
    methodOneTitle.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    methodOneTitle.style.color = 'white';
    methodOneTitle.style.padding = '5px 10px';
    methodOneTitle.style.borderRadius = '3px';
    methodOneTitle.style.fontSize = '13px';  // Set the font size here
    methodOneTitle.style.zIndex = '2';
    
    // Method 2 title overlay - separate from method div to control occlusion
    const methodTwoTitle = document.createElement('div');
    methodTwoTitle.classList.add('method-title');
    methodTwoTitle.innerText = Method2Name;
    methodTwoTitle.style.position = 'absolute';
    methodTwoTitle.style.bottom = '10px';
    methodTwoTitle.style.left = '10px';
    methodTwoTitle.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    methodTwoTitle.style.color = 'white';
    methodTwoTitle.style.padding = '5px 10px';
    methodTwoTitle.style.borderRadius = '3px';
    methodTwoTitle.style.fontSize = '13px';  // Set the font size here
    methodTwoTitle.style.zIndex = '2';

    // Add method divs to the method images container
    methodImagesContainer.appendChild(methodOneDiv);
    methodImagesContainer.appendChild(methodTwoDiv);
    methodImagesContainer.appendChild(methodOneTitle);
    methodImagesContainer.appendChild(methodTwoTitle);
    methodImagesContainer.appendChild(divider);
    
    // Add the method images container to the reconstructed container
    reconContainer.appendChild(methodImagesContainer);
    reconContainer.appendChild(reconTitle);

    // Append original and reconstructed containers to the pair container
    pairContainer.appendChild(origContainer);
    pairContainer.appendChild(reconContainer);

    // Create slider container
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    sliderContainer.style.width = '50%';
    sliderContainer.style.marginLeft = 'auto';

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = '100';
    slider.value = '50';
    slider.classList.add('slider');
    sliderContainer.appendChild(slider);

    // Append the pair container and slider to the wrapper
    wrapper.appendChild(pairContainer);

    const columnLabels = document.createElement('div');
    columnLabels.classList.add('column-labels');
    columnLabels.style.display = 'flex';
    
    const leftLabel = document.createElement('span');
    leftLabel.innerText = 'Original';
    leftLabel.style.textAlign = 'center';
    leftLabel.style.flex = '1';
    
    const rightLabel = document.createElement('span');
    // rightLabel.innerText = 'Reconstructed Image';
    rightLabel.style.textAlign = 'center';
    rightLabel.style.flex = '1';

    // columnLabels.appendChild(leftLabel);
    // columnLabels.appendChild(rightLabel);
    wrapper.appendChild(columnLabels);
    wrapper.appendChild(sliderContainer);

    // Set up the slider event to update the clip paths and divider position
    slider.addEventListener('input', function() {
        const value = slider.value;
        const percentage = value;
        
        // Apply clip paths to both method divs
        methodTwoDiv.style.clipPath = `polygon(0% 0%, 0% 100%, ${percentage}% 100%, ${percentage}% 0%)`;
        methodOneDiv.style.clipPath = `polygon(${percentage}% 0%, ${percentage}% 100%, 100% 100%, 100% 0%)`;
        
        // Update the divider position
        divider.style.left = value + '%';
        
        // Calculate the right edge of method two title
        const methodTwoTitleWidth = methodTwoTitle.offsetWidth;
        const containerWidth = reconContainer.offsetWidth;
        const methodTwoTitleRightEdge = (methodTwoTitleWidth / containerWidth) * 100;
        
        // Calculate the left edge of method one title
        const methodOneTitleWidth = methodOneTitle.offsetWidth;
        const methodOneTitleLeftEdge = 100 - (methodOneTitleWidth / containerWidth) * 100;
        
        // Manage title visibility based on slider position
        if (percentage < methodTwoTitleRightEdge) {
            // If slider is to the left of method two title's right edge
            methodTwoTitle.style.clipPath = `polygon(0% 0%, 0% 100%, ${percentage}% 100%, ${percentage}% 0%)`;
        } else {
            // If slider has passed method two title
            methodTwoTitle.style.clipPath = 'none';
        }
        
        if (percentage > methodOneTitleLeftEdge) {
            // If slider is to the right of method one title's left edge
            methodOneTitle.style.clipPath = `polygon(${percentage}% 0%, ${percentage}% 100%, 100% 100%, 100% 0%)`;
        } else {
            // If slider hasn't reached method one title
            methodOneTitle.style.clipPath = 'none';
        }
    });

    // Wait for the original image to load to set the proper aspect ratio
    origImg.onload = function() {
        const aspectRatio = origImg.naturalHeight / origImg.naturalWidth;
        methodImagesContainer.style.paddingTop = (aspectRatio * 100) + '%';
        
        // Initialize the slider effect after image is loaded
        slider.dispatchEvent(new Event('input'));
    };

    return wrapper;
}