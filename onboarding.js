// ============================
// Onboarding System
// ============================

class OnboardingFlow {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 8;
        this.userData = {
            plan: null,
            quiz: {},
            account: {},
            deposit: {}
        };
        this.init();
    }

    init() {
        this.createModal();
        this.attachEventListeners();
    }

    createModal() {
        const modalHTML = `
            <div id="onboardingModal" class="modal-overlay">
                <div class="modal-container">
                    <button class="modal-close" onclick="onboarding.closeModal()">&times;</button>
                    <div class="modal-content">
                        ${this.createStepContent()}
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    createStepContent() {
        return `
            <!-- Step 1: Welcome -->
            <div class="modal-step active" data-step="1">
                <div class="step-header">
                    <div class="step-number">1</div>
                    <h2 class="step-title">Let's build your investment plan.</h2>
                    <p class="step-subtitle">Choose a starting amount to see your potential growth.</p>
                </div>
                <div class="modal-actions">
                    <button class="btn-modal btn-next" onclick="onboarding.nextStep()">Continue</button>
                </div>
            </div>

            <!-- Step 2: Select Investment Plan -->
            <div class="modal-step" data-step="2">
                <div class="step-header">
                    <div class="step-number">2</div>
                    <h2 class="step-title">Choose Your Investment Plan</h2>
                    <p class="step-subtitle">Select the plan that fits your financial goals</p>
                </div>
                <div class="plans-grid">
                    <div class="plan-card" data-plan="200">
                        <span class="plan-badge">Popular</span>
                        <div class="plan-amount">$200</div>
                        <div class="plan-name">Starter Goal Plan</div>
                        <ul class="plan-features">
                            <li>Perfect for beginners</li>
                            <li>Low-risk portfolio</li>
                            <li>Target: $1,000+</li>
                            <li>Flexible timeline</li>
                        </ul>
                        <div class="plan-expanded">
                            <div class="roi-preview">
                                <div class="roi-stat">
                                    <span>Deposit Amount</span>
                                    <span>$200</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Target Growth</span>
                                    <span>$1,000+</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Expected ROI</span>
                                    <span>400%+</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Risk Level</span>
                                    <span>Low</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="plan-card" data-plan="300">
                        <span class="plan-badge">Recommended</span>
                        <div class="plan-amount">$300</div>
                        <div class="plan-name">Quick Growth Plan</div>
                        <ul class="plan-features">
                            <li>Balanced approach</li>
                            <li>Medium-risk portfolio</li>
                            <li>Target: $1,800+</li>
                            <li>Accelerated growth</li>
                        </ul>
                        <div class="plan-expanded">
                            <div class="roi-preview">
                                <div class="roi-stat">
                                    <span>Deposit Amount</span>
                                    <span>$300</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Target Growth</span>
                                    <span>$1,800+</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Expected ROI</span>
                                    <span>500%+</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Risk Level</span>
                                    <span>Medium</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="plan-card" data-plan="400">
                        <span class="plan-badge">Best Value</span>
                        <div class="plan-amount">$400</div>
                        <div class="plan-name">Steady Growth Plan</div>
                        <ul class="plan-features">
                            <li>Consistent returns</li>
                            <li>Diversified portfolio</li>
                            <li>Target: $2,500+</li>
                            <li>Premium features</li>
                        </ul>
                        <div class="plan-expanded">
                            <div class="roi-preview">
                                <div class="roi-stat">
                                    <span>Deposit Amount</span>
                                    <span>$400</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Target Growth</span>
                                    <span>$2,500+</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Expected ROI</span>
                                    <span>525%+</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Risk Level</span>
                                    <span>Medium</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="plan-card" data-plan="500">
                        <span class="plan-badge">Premium</span>
                        <div class="plan-amount">$500</div>
                        <div class="plan-name">Accelerator Plan</div>
                        <ul class="plan-features">
                            <li>Maximum growth potential</li>
                            <li>Advanced strategies</li>
                            <li>Target: $3,500+</li>
                            <li>Priority support</li>
                        </ul>
                        <div class="plan-expanded">
                            <div class="roi-preview">
                                <div class="roi-stat">
                                    <span>Deposit Amount</span>
                                    <span>$500</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Target Growth</span>
                                    <span>$3,500+</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Expected ROI</span>
                                    <span>600%+</span>
                                </div>
                                <div class="roi-stat">
                                    <span>Risk Level</span>
                                    <span>Medium-High</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-modal btn-back" onclick="onboarding.prevStep()">Back</button>
                    <button class="btn-modal btn-next" onclick="onboarding.nextStep()" disabled>Continue</button>
                </div>
            </div>

            <!-- Step 3: Quiz Question 1 -->
            <div class="modal-step" data-step="3">
                <div class="step-header">
                    <div class="step-number">3</div>
                    <h2 class="step-title">Let's Personalize Your Plan</h2>
                    <p class="step-subtitle">Answer a few quick questions to optimize your investment strategy</p>
                </div>
                <div class="quiz-progress">
                    <div class="progress-dot active"></div>
                    <div class="progress-dot"></div>
                    <div class="progress-dot"></div>
                    <div class="progress-dot"></div>
                </div>
                <div class="quiz-question">
                    <div class="question-text">What's your investing experience level?</div>
                    <div class="quiz-options">
                        <div class="quiz-option" data-question="experience" data-value="beginner">
                            <div class="option-icon">🌱</div>
                            <div class="option-text">
                                <div class="option-title">Beginner</div>
                                <div class="option-desc">Just starting my investment journey</div>
                            </div>
                        </div>
                        <div class="quiz-option" data-question="experience" data-value="intermediate">
                            <div class="option-icon">📈</div>
                            <div class="option-text">
                                <div class="option-title">Intermediate</div>
                                <div class="option-desc">I have some trading experience</div>
                            </div>
                        </div>
                        <div class="quiz-option" data-question="experience" data-value="advanced">
                            <div class="option-icon">🎯</div>
                            <div class="option-text">
                                <div class="option-title">Advanced</div>
                                <div class="option-desc">Experienced trader with proven strategies</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-modal btn-back" onclick="onboarding.prevStep()">Back</button>
                    <button class="btn-modal btn-next" onclick="onboarding.nextStep()" disabled>Continue</button>
                </div>
            </div>

            <!-- Step 4: Quiz Question 2 -->
            <div class="modal-step" data-step="4">
                <div class="step-header">
                    <div class="step-number">3</div>
                    <h2 class="step-title">Risk Assessment</h2>
                    <p class="step-subtitle">Help us understand your risk comfort level</p>
                </div>
                <div class="quiz-progress">
                    <div class="progress-dot completed"></div>
                    <div class="progress-dot active"></div>
                    <div class="progress-dot"></div>
                    <div class="progress-dot"></div>
                </div>
                <div class="quiz-question">
                    <div class="question-text">How comfortable are you with market volatility?</div>
                    <div class="quiz-options">
                        <div class="quiz-option" data-question="risk" data-value="low">
                            <div class="option-icon">🛡️</div>
                            <div class="option-text">
                                <div class="option-title">Conservative</div>
                                <div class="option-desc">I prefer stable, lower-risk investments</div>
                            </div>
                        </div>
                        <div class="quiz-option" data-question="risk" data-value="medium">
                            <div class="option-icon">⚖️</div>
                            <div class="option-text">
                                <div class="option-title">Balanced</div>
                                <div class="option-desc">I can handle moderate fluctuations</div>
                            </div>
                        </div>
                        <div class="quiz-option" data-question="risk" data-value="high">
                            <div class="option-icon">🚀</div>
                            <div class="option-text">
                                <div class="option-title">Aggressive</div>
                                <div class="option-desc">I'm comfortable with higher risk for greater returns</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-modal btn-back" onclick="onboarding.prevStep()">Back</button>
                    <button class="btn-modal btn-next" onclick="onboarding.nextStep()" disabled>Continue</button>
                </div>
            </div>

            <!-- Step 5: Quiz Question 3 -->
            <div class="modal-step" data-step="5">
                <div class="step-header">
                    <div class="step-number">3</div>
                    <h2 class="step-title">Investment Timeline</h2>
                    <p class="step-subtitle">When do you plan to need your investment returns?</p>
                </div>
                <div class="quiz-progress">
                    <div class="progress-dot completed"></div>
                    <div class="progress-dot completed"></div>
                    <div class="progress-dot active"></div>
                    <div class="progress-dot"></div>
                </div>
                <div class="quiz-question">
                    <div class="question-text">What's your investment time horizon?</div>
                    <div class="quiz-options">
                        <div class="quiz-option" data-question="timeline" data-value="short">
                            <div class="option-icon">⚡</div>
                            <div class="option-text">
                                <div class="option-title">Short-term</div>
                                <div class="option-desc">Less than 6 months</div>
                            </div>
                        </div>
                        <div class="quiz-option" data-question="timeline" data-value="medium">
                            <div class="option-icon">📅</div>
                            <div class="option-text">
                                <div class="option-title">Medium-term</div>
                                <div class="option-desc">6 months to 2 years</div>
                            </div>
                        </div>
                        <div class="quiz-option" data-question="timeline" data-value="long">
                            <div class="option-icon">🏆</div>
                            <div class="option-text">
                                <div class="option-title">Long-term</div>
                                <div class="option-desc">2+ years</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-modal btn-back" onclick="onboarding.prevStep()">Back</button>
                    <button class="btn-modal btn-next" onclick="onboarding.nextStep()" disabled>Continue</button>
                </div>
            </div>

            <!-- Step 6: Quiz Question 4 -->
            <div class="modal-step" data-step="6">
                <div class="step-header">
                    <div class="step-number">3</div>
                    <h2 class="step-title">Asset Preferences</h2>
                    <p class="step-subtitle">What type of assets interest you most?</p>
                </div>
                <div class="quiz-progress">
                    <div class="progress-dot completed"></div>
                    <div class="progress-dot completed"></div>
                    <div class="progress-dot completed"></div>
                    <div class="progress-dot active"></div>
                </div>
                <div class="quiz-question">
                    <div class="question-text">Select your preferred asset class</div>
                    <div class="quiz-options">
                        <div class="quiz-option" data-question="assets" data-value="crypto">
                            <div class="option-icon">₿</div>
                            <div class="option-text">
                                <div class="option-title">Cryptocurrency</div>
                                <div class="option-desc">Bitcoin, Ethereum, and altcoins</div>
                            </div>
                        </div>
                        <div class="quiz-option" data-question="assets" data-value="stocks">
                            <div class="option-icon">📊</div>
                            <div class="option-text">
                                <div class="option-title">Stocks</div>
                                <div class="option-desc">Traditional equity markets</div>
                            </div>
                        </div>
                        <div class="quiz-option" data-question="assets" data-value="mixed">
                            <div class="option-icon">🎲</div>
                            <div class="option-text">
                                <div class="option-title">Mixed Portfolio</div>
                                <div class="option-desc">Diversified across multiple asset classes</div>
                            </div>
                        </div>
                        <div class="quiz-option" data-question="assets" data-value="forex">
                            <div class="option-icon">💱</div>
                            <div class="option-text">
                                <div class="option-title">Forex</div>
                                <div class="option-desc">Foreign exchange currency trading</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-modal btn-back" onclick="onboarding.prevStep()">Back</button>
                    <button class="btn-modal btn-next" onclick="onboarding.analyzeQuiz()">Analyze My Profile</button>
                </div>
            </div>

            <!-- Step 7: Recommendation & ROI -->
            <div class="modal-step" data-step="7">
                <div class="step-header">
                    <div class="step-number">4</div>
                    <h2 class="step-title">Your Personalized Investment Strategy</h2>
                    <p class="step-subtitle">Based on your answers, we've created the perfect plan for you</p>
                </div>
                <div class="recommendation-card">
                    <div class="recommendation-icon">✨</div>
                    <div class="recommendation-text">Smart Portfolio Match</div>
                    <div class="match-percentage">87% Match</div>
                    <p style="color: var(--text-secondary); margin-top: 10px;">This plan suits your goals and risk profile</p>
                </div>
                <div class="roi-chart-container">
                    <div class="chart-header">
                        <div>
                            <div class="chart-value" id="projectedValue">$1,000+</div>
                            <div style="color: var(--text-secondary);">Projected Value</div>
                        </div>
                        <div style="text-align: right;">
                            <div class="chart-growth">+400%</div>
                            <div style="color: var(--text-secondary); font-size: 14px;">Expected Growth</div>
                        </div>
                    </div>
                    <div class="chart-timeline">
                        <button class="timeline-btn active" data-months="1">1M</button>
                        <button class="timeline-btn" data-months="3">3M</button>
                        <button class="timeline-btn" data-months="6">6M</button>
                        <button class="timeline-btn" data-months="12">1Y</button>
                    </div>
                    <div class="chart-visual">
                        <div class="chart-line">
                            <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" style="stop-color:#7FB800;stop-opacity:0.3" />
                                        <stop offset="100%" style="stop-color:#7FB800;stop-opacity:0" />
                                    </linearGradient>
                                </defs>
                                <path d="M 0 140 Q 100 120, 200 80 T 400 20" stroke="#7FB800" stroke-width="3" fill="none"/>
                                <path d="M 0 140 Q 100 120, 200 80 T 400 20 L 400 160 L 0 160 Z" fill="url(#chartGradient)"/>
                                <circle cx="0" cy="140" r="5" fill="#2DE2E6"/>
                                <circle cx="400" cy="20" r="5" fill="#7FB800"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-modal btn-back" onclick="onboarding.prevStep()">Back</button>
                    <button class="btn-modal btn-next" onclick="onboarding.nextStep()">Activate My Plan</button>
                </div>
            </div>

            <!-- Step 8: Account Setup -->
            <div class="modal-step" data-step="8">
                <div class="step-header">
                    <div class="step-number">5</div>
                    <h2 class="step-title">Create Your Account</h2>
                    <p class="step-subtitle">Secure your investment with a TradeNova account</p>
                </div>
                <form id="accountForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">First Name</label>
                            <input type="text" class="form-input" placeholder="John" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Last Name</label>
                            <input type="text" class="form-input" placeholder="Doe" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email Address</label>
                        <input type="email" class="form-input" placeholder="john@example.com" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Phone Number</label>
                        <input type="tel" class="form-input" placeholder="+1 (555) 123-4567" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-input" placeholder="Create a strong password" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Confirm Password</label>
                        <input type="password" class="form-input" placeholder="Re-enter your password" required>
                    </div>
                </form>
                <div class="modal-actions">
                    <button class="btn-modal btn-back" onclick="onboarding.prevStep()">Back</button>
                    <button class="btn-modal btn-next" onclick="onboarding.nextStep()">Continue to Payment</button>
                </div>
            </div>

            <!-- Step 9: Deposit -->
            <div class="modal-step" data-step="9">
                <div class="step-header">
                    <div class="step-number">6</div>
                    <h2 class="step-title">Fund Your Investment</h2>
                    <p class="step-subtitle">Deposit <span id="depositAmount" style="color: var(--bright-cyan); font-weight: 700;">$200</span> to activate your plan</p>
                </div>
                <div class="deposit-methods">
                    <div class="deposit-method selected" data-method="usdt">
                        <div class="method-header">
                            <div class="method-icon">₮</div>
                            <div>
                                <div class="method-name">USDT (TRC20)</div>
                                <div style="color: var(--text-secondary); font-size: 14px;">Tether via Trust Wallet</div>
                            </div>
                        </div>
                        <div class="method-details">
                            <div class="address-box">
                                <div class="address-label">Wallet Address</div>
                                <div class="address-value" id="walletAddress">TJtXTsjvBL8VZRU7z3oxpHL5hWgzQTs3wL</div>
                                <button class="copy-btn" onclick="onboarding.copyAddress()">
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
                                    • Minimum deposit: $<span class="min-deposit">200</span><br>
                                    • Funds will be credited within 5-10 minutes<br>
                                    • Keep your transaction hash for reference
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-modal btn-back" onclick="onboarding.prevStep()">Back</button>
                    <button class="btn-modal btn-next" onclick="onboarding.confirmDeposit()">I've Made the Payment</button>
                </div>
            </div>

            <!-- Step 10: Dashboard -->
            <div class="modal-step" data-step="10">
                <div class="step-header">
                    <div class="step-number">🎉</div>
                    <h2 class="step-title">Welcome to TradeNova!</h2>
                    <p class="step-subtitle">Your investment journey begins now</p>
                </div>
                <div class="dashboard-preview">
                    <div class="dashboard-header">
                        <div class="balance-label">Current Balance</div>
                        <div class="balance-display" id="dashboardBalance">$0.00</div>
                        <div style="color: var(--olive-green); font-size: 18px; margin-top: 10px;">
                            ⏳ Awaiting deposit confirmation...
                        </div>
                    </div>
                    <div class="dashboard-stats">
                        <div class="stat-card">
                            <div class="stat-label">Active Plan</div>
                            <div class="stat-value" id="dashboardPlan">Starter</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-label">Expected ROI</div>
                            <div class="stat-value">+400%</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-label">Risk Score</div>
                            <div class="stat-value">Low</div>
                        </div>
                    </div>
                    <div class="dashboard-actions">
                        <button class="action-btn">📊 View ROI Projection</button>
                        <button class="action-btn">💰 Add Funds</button>
                        <button class="action-btn">🔄 Switch Plan</button>
                        <button class="action-btn">💳 Withdraw</button>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn-modal btn-next" onclick="onboarding.goToDashboard()">Go to Dashboard</button>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        // Get Started buttons
        document.querySelectorAll('.btn-primary, .btn-large').forEach(btn => {
            if (btn.textContent.includes('GET STARTED') || 
                btn.textContent.includes('START LEARNING') || 
                btn.textContent.includes('START YOUR JOURNEY') ||
                btn.textContent.includes('SELECT INVESTMENT PLAN') ||
                btn.textContent.includes('START YOUR INVESTMENT JOURNEY')) {
                btn.addEventListener('click', () => this.openModal());
            }
        });

        // Plan selection
        document.addEventListener('click', (e) => {
            const planCard = e.target.closest('.plan-card');
            if (planCard && planCard.dataset.plan) {
                this.selectPlan(planCard);
            }
        });

        // Quiz options
        document.addEventListener('click', (e) => {
            const quizOption = e.target.closest('.quiz-option');
            if (quizOption) {
                this.selectQuizOption(quizOption);
            }
        });

        // Timeline buttons
        document.addEventListener('click', (e) => {
            const timelineBtn = e.target.closest('.timeline-btn');
            if (timelineBtn) {
                document.querySelectorAll('.timeline-btn').forEach(b => b.classList.remove('active'));
                timelineBtn.classList.add('active');
            }
        });
    }

    openModal() {
        const modal = document.getElementById('onboardingModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal() {
        const modal = document.getElementById('onboardingModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    nextStep() {
        const currentStepEl = document.querySelector(`.modal-step[data-step="${this.currentStep}"]`);
        currentStepEl.classList.remove('active');
        
        this.currentStep++;
        
        const nextStepEl = document.querySelector(`.modal-step[data-step="${this.currentStep}"]`);
        nextStepEl.classList.add('active');
        
        // Scroll to top of modal
        document.querySelector('.modal-container').scrollTop = 0;
    }

    prevStep() {
        const currentStepEl = document.querySelector(`.modal-step[data-step="${this.currentStep}"]`);
        currentStepEl.classList.remove('active');
        
        this.currentStep--;
        
        const prevStepEl = document.querySelector(`.modal-step[data-step="${this.currentStep}"]`);
        prevStepEl.classList.add('active');
        
        // Scroll to top of modal
        document.querySelector('.modal-container').scrollTop = 0;
    }

    selectPlan(planCard) {
        // Remove selection from all plans
        document.querySelectorAll('.plan-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Select this plan
        planCard.classList.add('selected');
        this.userData.plan = planCard.dataset.plan;
        
        // Enable continue button
        const continueBtn = document.querySelector('.modal-step[data-step="2"] .btn-next');
        continueBtn.disabled = false;
        
        // Update deposit amount in later steps
        document.getElementById('depositAmount').textContent = `$${this.userData.plan}`;
        document.querySelector('.min-deposit').textContent = this.userData.plan;
    }

    selectQuizOption(option) {
        const question = option.dataset.question;
        const value = option.dataset.value;
        
        // Remove selection from same question options
        document.querySelectorAll(`.quiz-option[data-question="${question}"]`).forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Select this option
        option.classList.add('selected');
        this.userData.quiz[question] = value;
        
        // Enable continue button
        const currentStep = document.querySelector('.modal-step.active');
        const continueBtn = currentStep.querySelector('.btn-next');
        if (continueBtn) {
            continueBtn.disabled = false;
        }
    }

    analyzeQuiz() {
        // Show loading animation
        const currentStep = document.querySelector('.modal-step.active');
        const originalContent = currentStep.innerHTML;
        
        currentStep.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
                <h3 style="color: var(--text-primary); margin-bottom: 10px;">Analyzing Your Profile...</h3>
                <p style="color: var(--text-secondary);">Creating your personalized investment strategy</p>
            </div>
        `;
        
        // Simulate analysis
        setTimeout(() => {
            this.nextStep();
            
            // Calculate match percentage based on answers
            const matchPercentage = this.calculateMatchPercentage();
            document.querySelector('.match-percentage').textContent = `${matchPercentage}% Match`;
        }, 2000);
    }

    calculateMatchPercentage() {
        // Simple algorithm to calculate match
        let score = 70;
        
        if (this.userData.quiz.experience === 'beginner' && this.userData.quiz.risk === 'low') {
            score += 15;
        }
        if (this.userData.quiz.timeline === 'long') {
            score += 10;
        }
        if (this.userData.quiz.assets === 'mixed') {
            score += 5;
        }
        
        return Math.min(score, 95);
    }

    copyAddress() {
        const address = document.getElementById('walletAddress').textContent;
        navigator.clipboard.writeText(address).then(() => {
            const btn = document.querySelector('.copy-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '✓ Copied!';
            btn.style.background = '#7FB800';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
            }, 2000);
        });
    }

    confirmDeposit() {
        // Show loading
        const btn = event.target;
        btn.innerHTML = 'Processing...';
        btn.disabled = true;
        
        // Simulate verification
        setTimeout(() => {
            this.nextStep();
            
            // Update dashboard with plan info
            const planNames = {
                '200': 'Starter Goal Plan',
                '300': 'Quick Growth Plan',
                '400': 'Steady Growth Plan',
                '500': 'Accelerator Plan'
            };
            
            document.getElementById('dashboardPlan').textContent = planNames[this.userData.plan];
        }, 1500);
    }

    goToDashboard() {
        alert('🎉 Congratulations! Your account is being set up. You will receive a confirmation email shortly with your dashboard access link once deposit is confirmed. Or contact use the Contact Us button to contact our mod via TG or Whatsapp.');
        this.closeModal();
        
        // Reset for demo purposes
        this.currentStep = 1;
        this.userData = { plan: null, quiz: {}, account: {}, deposit: {} };
    }
}

// Initialize onboarding system
let onboarding;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        onboarding = new OnboardingFlow();
        console.log('Onboarding system initialized');
    });
} else {
    onboarding = new OnboardingFlow();
    console.log('Onboarding system initialized');
}
