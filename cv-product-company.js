/**
 * Product Company CV Dynamic Content Loader
 * Copyright (c) 2025 Kiran Badave
 * Licensed under the MIT License
 * https://github.com/kiran-badave/kiran-badave.github.io
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if portfolioData is available
    if (typeof portfolioData === 'undefined') {
        console.error('portfolioData not found. Make sure data.js is loaded.');
        return;
    }

    // Populate personal information
    populatePersonalInfo();
    
    // Populate summary
    // populateSummary();
    
    // Populate experience
    // populateExperience();
    
    // Populate system design
    //populateSystemDesign();
    
    // Populate technical skills
    populateTechnicalSkills();
    
    // Populate education
    populateEducation();
    
    // Populate key highlights
    // populateKeyHighlights();
});

function populatePersonalInfo() {
    const { personal } = portfolioData;
    
    // Update name
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        nameElement.textContent = personal.name.toUpperCase();
    }
    
    // Update contact information
    const contactBar = document.querySelector('.contact-bar');
    if (contactBar) {
        contactBar.innerHTML = `
            <span>📧 <a href="mailto:${personal.email}">${personal.email}</a></span>
            <span>📱 <a href="tel:${personal.phone[0]}">${personal.phone[0]}</a></span>
            <span>🔗 <a href="${personal.linkedin}" target="_blank">${personal.linkedinDisplay}</a></span>
            <span>💻 <a href="${personal.github}" target="_blank">${personal.githubDisplay}</a></span>
        `;
    }
}

function populateSummary() {
    const summaryElement = document.querySelector('.summary-section p');
    if (summaryElement && portfolioData.productCompanySummary) {
        summaryElement.innerHTML = portfolioData.productCompanySummary;
    }
}

function populateExperience() {
    const experienceContainer = document.querySelector('.cv-section:has(.experience-item)');
    if (!experienceContainer || !portfolioData.productCompanyExperience) return;
    
    // Clear existing experience items
    const existingItems = experienceContainer.querySelectorAll('.experience-item');
    existingItems.forEach(item => item.remove());
    
    // Add new experience items
    portfolioData.productCompanyExperience.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.className = 'experience-item';
        
        const impactsList = exp.impacts.map(impact => `<li>${impact}</li>`).join('');
        
        expDiv.innerHTML = `
            <div class="exp-header">
                <div>
                    <strong class="company">${exp.company} — ${exp.role}</strong>
                    <span class="duration">${exp.duration} | ${exp.location}</span>
                </div>
            </div>
            <ul class="impact-list">
                ${impactsList}
            </ul>
        `;
        
        experienceContainer.appendChild(expDiv);
    });
}

function populateSystemDesign() {
    const systemDesignSection = document.querySelector('.cv-section:has(.section-title)');
    if (!systemDesignSection || !portfolioData.systemDesign) return;
    
    const systemDesignList = systemDesignSection.querySelector('.compact-list');
    if (systemDesignList) {
        systemDesignList.innerHTML = portfolioData.systemDesign
            .map(item => `<li>${item}</li>`)
            .join('');
    }
}

function populateTechnicalSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    // Technical skills are already hardcoded in HTML, but we can update if needed
    // For now, keeping the existing structure as it's well-organized
}

function populateEducation() {
    const educationSection = document.querySelector('.cv-section:has(.education-compact)');
    if (!educationSection || !portfolioData.education) return;
    
    const educationCompact = educationSection.querySelector('.education-compact');
    if (educationCompact) {
        educationCompact.innerHTML = portfolioData.education
            .map(edu => `<div><strong>${edu.field}</strong> | ${edu.institution.split(',')[0]} (${edu.duration})</div>`)
            .join('');
    }
}

function populateKeyHighlights() {
    const highlightsSection = document.querySelector('.cv-section:has(.highlights)');
    if (!highlightsSection || !portfolioData.keyHighlights) return;
    
    const highlightsList = highlightsSection.querySelector('.highlights');
    if (highlightsList) {
        highlightsList.innerHTML = portfolioData.keyHighlights
            .map(highlight => `<li>${highlight}</li>`)
            .join('');
    }
}
