// ============================
// Learning Modal System
// ============================

class LearningModal {
    constructor() {
        this.createModal();
        this.attachEventListeners();
    }

    createModal() {
        const modalHTML = `
            <div id="learningModal" class="learning-modal-overlay">
                <div class="learning-modal-container">
                    <button class="learning-modal-close" onclick="learningModal.closeModal()">&times;</button>
                    <div class="learning-modal-content" id="learningModalContent">
                        <!-- Content will be dynamically loaded -->
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    attachEventListeners() {
        // Attach to all "Learn More" buttons
        document.addEventListener('click', (e) => {
            const learnMoreBtn = e.target.closest('.btn-secondary');
            if (learnMoreBtn && learnMoreBtn.textContent.includes('LEARN MORE')) {
                e.preventDefault();
                const courseCard = learnMoreBtn.closest('.course-card');
                const courseTitle = courseCard.querySelector('.course-title').textContent;
                this.openModal(courseTitle);
            }
        });

        // Close on overlay click
        document.getElementById('learningModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'learningModal') {
                this.closeModal();
            }
        });
    }

    openModal(courseType) {
        const modal = document.getElementById('learningModal');
        const content = document.getElementById('learningModalContent');
        
        content.innerHTML = this.getContentForCourse(courseType);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('learningModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    getContentForCourse(courseType) {
        const courses = {
            'BASICS': {
                badge: 'basics',
                icon: '🟦',
                title: 'Basics: Build Your Foundation',
                subtitle: 'Master the essential principles of investing and learn how to grow your wealth safely.',
                purpose: 'Teach beginners the essential principles of investing and how the platform works.',
                whoFor: [
                    'Beginner investors',
                    'Users new to trading',
                    'Anyone who wants step-by-step intro lessons'
                ],
                timeToComplete: '1–2 hours (short lessons)',
                whatYouLearn: [
                    'What is investing?',
                    'Understanding ROI',
                    'Types of assets (crypto, stocks, commodities)',
                    'Beginner\'s guide to market movements',
                    'How to avoid common mistakes',
                    'How auto-invest works',
                    'How to track your investment performance'
                ],
                benefits: [
                    { icon: '💡', title: 'Gain Confidence', desc: 'Build solid foundation before investing' },
                    { icon: '📈', title: 'Understand Growth', desc: 'See how your plan grows over time' },
                    { icon: '🎯', title: 'Smart Decisions', desc: 'Make informed investment choices' },
                    { icon: '🛡️', title: 'Avoid Losses', desc: 'Learn to prevent beginner mistakes' }
                ],
                modules: [
                    'Introduction to Investing',
                    'Understanding Assets',
                    'Safe Investing 101',
                    'How ROI Works',
                    'Using TradeNova for Growth'
                ],
                pricing: {
                    monthly: { amount: 75, period: 'month' },
                    yearly: { amount: 200, period: 'year', save: 'Save $700/year' }
                }
            },
            'INTERMEDIATE': {
                badge: 'intermediate',
                icon: '🟩',
                title: 'Intermediate: Grow Your Skills',
                subtitle: 'Develop deeper analysis skills and smarter investment strategies for consistent returns.',
                purpose: 'Develop deeper analysis skills, market understanding, and smarter investment strategies.',
                whoFor: [
                    'Investors who know the basics',
                    'Users wanting more control',
                    'People upgrading their plans'
                ],
                timeToComplete: '2–3 hours',
                whatYouLearn: [
                    'Reading market trends',
                    'Candlesticks and basic chart analysis',
                    'Crypto market behavior',
                    'Diversification strategies',
                    'Medium-risk investing',
                    'Managing volatility',
                    'How to scale investments for higher ROI'
                ],
                benefits: [
                    { icon: '📉', title: 'Reduce Losses', desc: 'Minimize risks with better strategies' },
                    { icon: '🎯', title: 'Spot Opportunities', desc: 'Identify profitable market moments' },
                    { icon: '📊', title: 'Read Signals', desc: 'Understand market indicators' },
                    { icon: '💰', title: 'Higher Returns', desc: 'Increase your ROI potential' }
                ],
                modules: [
                    'Market Cycles Explained',
                    'Trend Reading Basics',
                    'Diversification Strategy',
                    'Crypto Volatility Management',
                    'Optimizing Medium-Term ROI'
                ],
                pricing: {
                    monthly: { amount: 120, period: 'month' },
                    yearly: { amount: 350, period: 'year', save: 'Save +65%' }
                }
            },
            'EXPERT': {
                badge: 'expert',
                icon: '🟥',
                title: 'Expert: Master Investment Strategy',
                subtitle: 'Professional-level guidance for advanced investors aiming for maximum ROI and wealth building.',
                purpose: 'Offer professional-level guidance for advanced investors aiming for maximum ROI.',
                whoFor: [
                    'Experienced investors',
                    'Users with large portfolios',
                    'Anyone aiming to maximize long-term wealth',
                    'Serious trading learners'
                ],
                timeToComplete: '3–5 hours (full expert-level program)',
                whatYouLearn: [
                    'Advanced technical analysis',
                    'Risk/reward modeling',
                    'Portfolio optimization',
                    'Hedging strategies',
                    'High-growth crypto techniques',
                    'Long-term wealth building',
                    'Macro-economic trend interpretation',
                    'Building personal investment strategies'
                ],
                benefits: [
                    { icon: '🎓', title: 'Professional Skills', desc: 'Expert-grade decision making' },
                    { icon: '⚡', title: 'Precision Timing', desc: 'Master entry and exit points' },
                    { icon: '🚀', title: 'Optimized Growth', desc: 'Maximum return potential' },
                    { icon: '💎', title: 'Wealth Building', desc: 'Clear acceleration strategies' }
                ],
                modules: [
                    'Advanced Charting',
                    'Portfolio Hedging Techniques',
                    'Multi-Asset Diversification',
                    'Risk Probability Mapping',
                    'Building a 5-Year Wealth Strategy'
                ],
                pricing: {
                    monthly: { amount: 400, period: 'month' },
                    yearly: { amount: 750, period: 'year', save: 'Premium Pro Tier' }
                }
            }
        };

        const course = courses[courseType];
        if (!course) return '<p>Course not found</p>';

        return `
            <div class="tier-badge ${course.badge}">${course.icon} ${courseType}</div>
            <h2 class="learning-title">${course.title}</h2>
            <p class="learning-subtitle">${course.subtitle}</p>

            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-icon">⏱️</div>
                    <div class="stat-title">Time to Complete</div>
                    <div class="stat-value">${course.timeToComplete}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">📚</div>
                    <div class="stat-title">Total Modules</div>
                    <div class="stat-value">${course.modules.length} Lessons</div>
                </div>
            </div>

            <div class="info-section">
                <h3 class="info-section-title">🎯 Purpose</h3>
                <p style="color: var(--text-secondary); line-height: 1.8; font-size: 15px;">${course.purpose}</p>
            </div>

            <div class="info-section">
                <h3 class="info-section-title">👤 Who It's For</h3>
                <ul class="info-list">
                    ${course.whoFor.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-section-title">📲 What You'll Learn</h3>
                <ul class="info-list">
                    ${course.whatYouLearn.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="info-section">
                <h3 class="info-section-title">⭐ Key Benefits</h3>
                <div class="benefits-grid">
                    ${course.benefits.map(benefit => `
                        <div class="benefit-card">
                            <div class="benefit-icon">${benefit.icon}</div>
                            <div class="benefit-text">
                                <div class="benefit-title">${benefit.title}</div>
                                <div class="benefit-desc">${benefit.desc}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="modules-preview">
                <div class="modules-title">📚 Module Preview</div>
                ${course.modules.map((module, index) => `
                    <div class="module-item">
                        <div class="module-number">${index + 1}</div>
                        <div class="module-name">${module}</div>
                    </div>
                `).join('')}
            </div>

            <div class="pricing-section">
                <div class="pricing-title">💰 Investment Options</div>
                <div class="pricing-options">
                    <div class="price-option">
                        <div class="price-period">${course.pricing.monthly.period}ly</div>
                        <div class="price-amount">$${course.pricing.monthly.amount}</div>
                        <div class="price-save">Per month</div>
                    </div>
                    <div class="price-option best-value">
                        <div class="price-period">${course.pricing.yearly.period}ly</div>
                        <div class="price-amount">$${course.pricing.yearly.amount}</div>
                        <div class="price-save">${course.pricing.yearly.save}</div>
                    </div>
                </div>
            </div>

            <div class="learning-cta">
                <button class="btn-learning" onclick="learningModal.startCourse('${courseType}')">
                    Start ${courseType} →
                </button>
            </div>
        `;
    }

    startCourse(courseType) {
        this.closeModal();
        
        // Get pricing info
        const courses = {
            'BASICS': { monthly: 75, yearly: 200 },
            'INTERMEDIATE': { monthly: 120, yearly: 350 },
            'EXPERT': { monthly: 400, yearly: 750 }
        };
        
        const course = courses[courseType];
        
        // Show payment modal
        setTimeout(() => {
            this.showPaymentModal(courseType, course);
        }, 300);
    }

    showPaymentModal(courseType, pricing) {
        const paymentHTML = `
            <div id="coursePaymentModal" class="learning-modal-overlay active">
                <div class="learning-modal-container">
                    <button class="learning-modal-close" onclick="learningModal.closePaymentModal()">&times;</button>
                    <div class="learning-modal-content">
                        <div class="tier-badge ${courseType.toLowerCase()}">${courseType}</div>
                        <h2 class="learning-title">Complete Your Enrollment</h2>
                        <p class="learning-subtitle">Choose your payment plan and fund your learning journey</p>

                        <div class="pricing-section" style="margin-bottom: 30px;">
                            <div class="pricing-title">Select Payment Plan</div>
                            <div class="pricing-options">
                                <div class="price-option" onclick="learningModal.selectPlan('monthly', ${pricing.monthly}, '${courseType}')" id="monthlyPlan">
                                    <div class="price-period">Monthly</div>
                                    <div class="price-amount">$${pricing.monthly}</div>
                                    <div class="price-save">Per month</div>
                                </div>
                                <div class="price-option best-value" onclick="learningModal.selectPlan('yearly', ${pricing.yearly}, '${courseType}')" id="yearlyPlan">
                                    <div class="price-period">Yearly</div>
                                    <div class="price-amount">$${pricing.yearly}</div>
                                    <div class="price-save">Best Value</div>
                                </div>
                            </div>
                        </div>

                        <div id="paymentSection" style="display: none;">
                            <div class="info-section">
                                <h3 class="info-section-title">💳 Payment Method</h3>
                            </div>

                            <div class="deposit-methods">
                                <div class="deposit-method selected">
                                    <div class="method-header">
                                        <div class="method-icon">₮</div>
                                        <div>
                                            <div class="method-name">USDT (TRC20)</div>
                                            <div style="color: var(--text-secondary); font-size: 14px;">Tether via Trust Wallet</div>
                                        </div>
                                    </div>
                                    <div class="method-details" style="display: block;">
                                        <div style="background: var(--slate-blue); padding: 20px; border-radius: 8px; margin: 20px 0;">
                                            <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 10px;">Amount to Pay:</div>
                                            <div style="font-size: 32px; font-weight: 800; color: var(--bright-cyan);" id="paymentAmount">$${pricing.monthly}</div>
                                            <div style="font-size: 12px; color: var(--text-secondary); margin-top: 5px;" id="paymentPeriod">Monthly Subscription</div>
                                        </div>

                                        <div class="address-box">
                                            <div class="address-label">Wallet Address</div>
                                            <div class="address-value">TJtXTsjvBL8VZRU7z3oxpHL5hWgzQTs3wL</div>
                                            <button class="copy-btn" onclick="learningModal.copyAddress()">
                                                📋 Copy Address
                                            </button>
                                        </div>
                                        
                                        <div class="qr-code">
                                            <div class="qr-placeholder">
                                                <div style="font-size: 14px; color: #333;">QR Code</div>
                                            </div>
                                        </div>
                                        
                                        <a href="https://link.trustwallet.com/send?asset=c195_tTR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&address=TJtXTsjvBL8VZRU7z3oxpHL5hWgzQTs3wL" 
                                           target="_blank" 
                                           class="btn-modal btn-next" 
                                           style="width: 100%; text-align: center; display: block; text-decoration: none; margin-top: 20px;">
                                            💳 Pay with Trust Wallet
                                        </a>
                                        
                                        <div style="margin-top: 20px; padding: 15px; background: rgba(45, 226, 230, 0.1); border-radius: 8px; border-left: 4px solid var(--bright-cyan);">
                                            <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.6;">
                                                <strong style="color: var(--bright-cyan);">Important:</strong><br>
                                                • Send only USDT (TRC20) to this address<br>
                                                • Amount: $<span id="minPayment">${pricing.monthly}</span> USDT<br>
                                                • Access granted within 5-10 minutes after confirmation<br>
                                                • Keep your transaction hash for reference
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="learning-cta" style="margin-top: 30px;">
                                <button class="btn-learning" onclick="learningModal.confirmCoursePayment('${courseType}')">
                                    I've Completed Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing payment modal if any
        const existingModal = document.getElementById('coursePaymentModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        document.body.insertAdjacentHTML('beforeend', paymentHTML);
        document.body.style.overflow = 'hidden';
    }

    selectPlan(period, amount, courseType) {
        // Update selection
        document.querySelectorAll('#monthlyPlan, #yearlyPlan').forEach(el => {
            el.style.borderColor = 'rgba(45, 226, 230, 0.2)';
            el.style.transform = 'scale(1)';
        });
        
        const selectedEl = document.getElementById(period === 'monthly' ? 'monthlyPlan' : 'yearlyPlan');
        selectedEl.style.borderColor = 'var(--olive-green)';
        selectedEl.style.transform = 'scale(1.05)';
        
        // Update payment amount
        document.getElementById('paymentAmount').textContent = `$${amount}`;
        document.getElementById('paymentPeriod').textContent = period === 'monthly' ? 'Monthly Subscription' : 'Yearly Subscription';
        document.getElementById('minPayment').textContent = amount;
        
        // Show payment section
        document.getElementById('paymentSection').style.display = 'block';
        
        // Smooth scroll to payment section
        setTimeout(() => {
            document.getElementById('paymentSection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    copyAddress() {
        const address = 'TJtXTsjvBL8VZRU7z3oxpHL5hWgzQTs3wL';
        navigator.clipboard.writeText(address).then(() => {
            const btn = document.querySelector('#coursePaymentModal .copy-btn');
            if (btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = '✓ Copied!';
                btn.style.background = '#7FB800';
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                }, 2000);
            }
        });
    }

    confirmCoursePayment(courseType) {
        const btn = event.target;
        btn.innerHTML = 'Processing...';
        btn.disabled = true;
        
        setTimeout(() => {
            this.closePaymentModal();
            alert(`🎉 Thank you for enrolling in ${courseType}!\n\nYou will receive a confirmation email with your course access details once your payment is confirmed.\n\nFor immediate assistance, use the Contact Us section to reach our support team via Telegram or WhatsApp.`);
        }, 1500);
    }

    closePaymentModal() {
        const modal = document.getElementById('coursePaymentModal');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
        }
    }
}

// Initialize learning modal system
let learningModal;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        learningModal = new LearningModal();
        console.log('Learning modal system initialized');
    });
} else {
    learningModal = new LearningModal();
    console.log('Learning modal system initialized');
}
