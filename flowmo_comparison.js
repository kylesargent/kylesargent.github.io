function createImageComparison(originalPath, method1Path, method2Path, Method1Name, Method2Name) {
// Create a wrapper for the entire comparison block
const wrapper = document.createElement('div');
wrapper.classList.add('comparison-block');

// Create the image-pair container
const pairContainer = document.createElement('div');
pairContainer.classList.add('image-pair');

// Original image container
const origContainer = document.createElement('div');
origContainer.classList.add('image-container', 'original-container');
const origTitle = document.createElement('div');
// origTitle.classList.add('comparison-title');
// origTitle.innerText = 'Original Image';
const origImg = document.createElement('img');
origImg.src = originalPath;
origImg.alt = 'Original Image';
origContainer.appendChild(origTitle);
origContainer.appendChild(origImg);

// Reconstructed image container
const reconContainer = document.createElement('div');
reconContainer.classList.add('image-container', 'reconstructed-container');
const reconTitle = document.createElement('div');
reconTitle.classList.add('comparison-title');
reconTitle.innerText = 'Reconstructed Image';

// Method 1 overlay
const methodOneDiv = document.createElement('div');
methodOneDiv.classList.add('method-one');
const methodOneImg = document.createElement('img');
methodOneImg.src = method1Path;
methodOneImg.alt = 'Method 1 Reconstruction';
methodOneDiv.appendChild(methodOneImg);

// Method 2 overlay
const methodTwoDiv = document.createElement('div');
methodTwoDiv.classList.add('method-two');
const methodTwoImg = document.createElement('img');
methodTwoImg.src = method2Path;
methodTwoImg.alt = 'Method 2 Reconstruction';
methodTwoDiv.appendChild(methodTwoImg);

// Divider element
const divider = document.createElement('div');
divider.classList.add('divider');

// Assemble the reconstructed container
reconContainer.appendChild(reconTitle);
reconContainer.appendChild(methodOneDiv);
reconContainer.appendChild(methodTwoDiv);
reconContainer.appendChild(divider);

// Append original and reconstructed containers to the pair container
pairContainer.appendChild(origContainer);
pairContainer.appendChild(reconContainer);

// Create slider container
const sliderContainer = document.createElement('div');
sliderContainer.classList.add('slider-container');
const slider = document.createElement('input');

sliderContainer.style.width = '50%';     // squish horizontally to half width
sliderContainer.style.marginLeft = 'auto';  // shift it to align right

width = '45%';
slider.type = 'range';
slider.min = '0';
slider.max = '100';
slider.value = '50';
slider.classList.add('slider');
sliderContainer.appendChild(slider);
const labels = document.createElement('div');
labels.classList.add('method-labels');
const label1 = document.createElement('span');
label1.innerText = Method1Name;
const label2 = document.createElement('span');
label2.innerText = Method2Name;
labels.appendChild(label1);
labels.appendChild(label2);
sliderContainer.appendChild(labels);

// Append the pair container and slider to the wrapper
wrapper.appendChild(pairContainer);

const columnLabels = document.createElement('div');
columnLabels.classList.add('column-labels');
const leftLabel = document.createElement('span');
leftLabel.innerText = 'Original';
const rightLabel = document.createElement('span');
rightLabel.innerText = 'Reconstructed Image';
// rightLabel.innerText.style.m = 'center'
leftLabel.style.textAlign = 'center';
rightLabel.style.textAlign = 'center';
leftLabel.style.flex = '1';
rightLabel.style.flex = '1';

// Ensure parent container uses flex layout for proper effect
columnLabels.style.display = 'flex';
columnLabels.appendChild(leftLabel);
columnLabels.appendChild(rightLabel);
wrapper.appendChild(columnLabels);

wrapper.appendChild(sliderContainer);

// Set up the slider event to update the clip path and divider position
slider.addEventListener('input', function() {
const value = slider.value;
const percentage = value;
methodTwoDiv.style.clipPath = `polygon(0% 0%, 0% 100%, ${percentage}% 100%, ${percentage}% 0%)`;
divider.style.left = value + '%';
});

// Initialize the slider effect
slider.dispatchEvent(new Event('input'));

return wrapper;
}