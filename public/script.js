// ==========================================================================
// 1. CONFIGURATION & INITIAL DATA
// ==========================================================================
const config = {
    dayOrder: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    programTemplates: {
        eightWeekClassic: [
            {
                week: 1, phase: 'Accumulation', days: [
                    { day: 'Sunday', exercise: 'Bench Press', sets: 4, reps: 8, intensity: 0.65, groups: [ { intensity: 0.65, reps: 8 }, { intensity: 0.65, reps: 8 }, { intensity: 0.65, reps: 8 }, { intensity: 0.65, reps: 8 } ] },
                    { day: 'Thursday', exercise: 'Bench Press', sets: 5, reps: 5, intensity: 0.775, groups: [ { intensity: 0.775, reps: 5 }, { intensity: 0.775, reps: 5 }, { intensity: 0.775, reps: 5 }, { intensity: 0.775, reps: 5 }, { intensity: 0.775, reps: 5 } ] },
                    { day: 'Friday', exercise: 'Squat', sets: 5, reps: 5, intensity: 0.75, groups: [ { intensity: 0.75, reps: 5 }, { intensity: 0.75, reps: 5 }, { intensity: 0.75, reps: 5 }, { intensity: 0.75, reps: 5 }, { intensity: 0.75, reps: 5 } ] }
                ]
            },
            { week: 2, phase: 'Accumulation', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 4, reps: 8, intensity: 0.675 }, { day: 'Thursday', exercise: 'Bench Press', sets: 5, reps: 5, intensity: 0.80 }, { day: 'Friday', exercise: 'Squat', sets: 5, reps: 5, intensity: 0.775 } ] },
            { week: 3, phase: 'Accumulation', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 4, reps: 8, intensity: 0.70 }, { day: 'Thursday', exercise: 'Bench Press', sets: 5, reps: 5, intensity: 0.825 }, { day: 'Friday', exercise: 'Squat', sets: 5, reps: 5, intensity: 0.80 } ] },
            { week: 4, phase: 'Deload', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 3, reps: 5, intensity: 0.60 }, { day: 'Thursday', exercise: 'Bench Press', sets: 3, reps: 5, intensity: 0.60 }, { day: 'Friday', exercise: 'Squat', sets: 3, reps: 5, intensity: 0.60 } ] },
            { week: 5, phase: 'Intensification', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 4, reps: 5, intensity: 0.70 }, { day: 'Thursday', exercise: 'Bench Press', sets: 4, reps: 3, intensity: 0.875 }, { day: 'Friday', exercise: 'Squat', sets: 5, reps: 3, intensity: 0.85 } ] },
            { week: 6, phase: 'Intensification', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 4, reps: 5, intensity: 0.725 }, { day: 'Thursday', exercise: 'Bench Press', sets: 3, reps: 3, intensity: 0.90 }, { day: 'Friday', exercise: 'Squat', sets: 4, reps: 3, intensity: 0.875 } ] },
            { week: 7, phase: 'Intensification', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 5, reps: 3, intensity: 0.75 }, { day: 'Thursday', exercise: 'Bench Press', sets: 3, reps: 2, intensity: 0.925 }, { day: 'Friday', exercise: 'Squat', sets: 3, reps: 3, intensity: 0.90 } ] },
            { week: 8, phase: 'Peak & Test', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 5, reps: 5, intensity: 0.70 }, { day: 'Thursday', exercise: 'Bench Press', sets: 3, reps: 1, intensity: 0.95 }, { day: 'Friday', exercise: 'Squat', sets: 3, reps: 1, intensity: 0.95 } ] }
        ],
        sixWeekPeaking: [
            { week: 1, phase: 'Deload', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 3, reps: 5, intensity: 0.60 }, { day: 'Thursday', exercise: 'Bench Press', sets: 3, reps: 5, intensity: 0.60 }, { day: 'Friday', exercise: 'Squat', sets: 3, reps: 5, intensity: 0.60 } ] },
            { week: 2, phase: 'Intensification', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 4, reps: 5, intensity: 0.70 }, { day: 'Thursday', exercise: 'Bench Press', sets: 4, reps: 3, intensity: 0.875 }, { day: 'Friday', exercise: 'Squat', sets: 5, reps: 3, intensity: 0.85 } ] },
            { week: 3, phase: 'Intensification', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 4, reps: 5, intensity: 0.725 }, { day: 'Thursday', exercise: 'Bench Press', sets: 3, reps: 3, intensity: 0.90 }, { day: 'Friday', exercise: 'Squat', sets: 4, reps: 3, intensity: 0.875 } ] },
            { week: 4, phase: 'Intensification', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 5, reps: 3, intensity: 0.75 }, { day: 'Thursday', exercise: 'Bench Press', sets: 3, reps: 2, intensity: 0.925 }, { day: 'Friday', exercise: 'Squat', sets: 3, reps: 3, intensity: 0.90 } ] },
            { week: 5, phase: 'Intensification', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 4, reps: 3, intensity: 0.775 }, { day: 'Thursday', exercise: 'Bench Press', sets: 3, reps: 2, intensity: 0.95 }, { day: 'Friday', exercise: 'Squat', sets: 3, reps: 2, intensity: 0.925 } ] },
            { week: 6, phase: 'Peak & Test', days: [ { day: 'Sunday', exercise: 'Bench Press', sets: 5, reps: 5, intensity: 0.70 }, { day: 'Thursday', exercise: 'Bench Press', sets: 3, reps: 1, intensity: 0.95 }, { day: 'Friday', exercise: 'Squat', sets: 3, reps: 1, intensity: 0.95 } ] }
        ]
    }
};

// ==========================================================================
// 2. APPLICATION CORE
// ==========================================================================
const app = {
    // 2.1. STATE MANAGEMENT
    state: {
        benchPressTM: 0,
        squatTM: 0,
        progressData: {},
        editMode: false,
        history: [],
        program: [],
        activeProgramKey: 'eightWeekClassic', // Add this line
        viewMode: 'all', // 'all' or 'single'
        currentWeek: 1,
        displayStyle: 'traditional',
        operatingMode: 'static' // 'static' or 'server'
    },

    // 2.2. DOM ELEMENT CACHE
    dom: {},

    // 2.3. INITIALIZATION
    async init() {
        this.dom = {
            benchTmInput: document.getElementById('bench-tm'),
            squatTmInput: document.getElementById('squat-tm'),
            workoutContainer: document.getElementById('workout-plan'),
            historyContainer: document.getElementById('history-container'),
            editModeToggle: document.getElementById('edit-mode-toggle'),
            archiveBtn: document.getElementById('archive-cycle-btn'),
            viewHistoryBtn: document.getElementById('view-history-btn'),
            prevWeekBtn: document.getElementById('prev-week-btn'),
            nextWeekBtn: document.getElementById('next-week-btn'),
            viewToggleBtn: document.getElementById('view-toggle-btn'),
            viewControls: document.querySelector('.view-controls'),
            exportBtn: document.getElementById('export-btn'),
            importBtn: document.getElementById('import-btn'),
            importFileInput: document.getElementById('import-file'),
            modal: document.getElementById('custom-modal'),
            modalTitle: document.getElementById('modal-title'),
            modalText: document.getElementById('modal-text'),
            modalBody: document.getElementById('modal-body'),
            modalConfirmBtn: document.getElementById('modal-confirm-btn'),
            modalCancelBtn: document.getElementById('modal-cancel-btn'),
            mainHeader: document.querySelector('header h1'),
            historyView: document.getElementById('history-view'),
            tmInputs: document.querySelector('.tm-inputs'),
            programSelect: document.getElementById('program-select'), // Add this
            authContainer: document.getElementById('auth-container'),
            loginForm: document.getElementById('login-form'),
            registerForm: document.getElementById('register-form'),
            showRegisterLink: document.getElementById('show-register'),
            showLoginLink: document.getElementById('show-login'),
            mainContent: document.querySelector('main'),
            mainHeader: document.querySelector('.main-header'),
            logoutBtn: document.getElementById('logout-btn'),

        };

        // Detect operating mode
        await this.checkHealth();
        
        if (this.state.operatingMode === 'server') {
            this.api.token = localStorage.getItem('authToken');
        }

        await this.storage.load();
        this.render.updateDisplay();
        this.setupEventListeners();
    },

    async checkHealth() {
        try {
            const response = await fetch('/api/health');
            if (response.ok) {
                const data = await response.json();
                this.state.operatingMode = data.mode || 'server';
            } else {
                this.state.operatingMode = 'static';
            }
        } catch (error) {
            this.state.operatingMode = 'static';
        }
        console.log(`Operating in ${this.state.operatingMode} mode.`);
    },

    // 2.4. EVENT LISTENER SETUP
    setupEventListeners() {
        this.dom.registerForm.addEventListener('submit', this.handlers.handleRegister.bind(this));
        this.dom.showRegisterLink.addEventListener('click', (e) => { e.preventDefault(); this.render.toggleAuthForm(false); });
        this.dom.showLoginLink.addEventListener('click', (e) => { e.preventDefault(); this.render.toggleAuthForm(true); });
        this.dom.loginForm.addEventListener('submit', this.handlers.handleLogin.bind(this));
        this.dom.logoutBtn.addEventListener('click', this.handlers.handleLogout.bind(this));


        // Main controls
        this.dom.benchTmInput.addEventListener('input', this.handlers.handleTMChange.bind(this));
        this.dom.squatTmInput.addEventListener('input', this.handlers.handleTMChange.bind(this));
        this.dom.programSelect.addEventListener('change', this.handlers.handleProgramChange.bind(this)); // Add this
        this.dom.editModeToggle.addEventListener('click', this.handlers.handleEditModeToggle.bind(this));
        this.dom.archiveBtn.addEventListener('click', this.handlers.archiveAndStartNewCycle.bind(this));
        this.dom.viewHistoryBtn.addEventListener('click', this.handlers.toggleHistoryView.bind(this));
        this.dom.exportBtn.addEventListener('click', this.handlers.exportPlan.bind(this));
        this.dom.importBtn.addEventListener('click', this.handlers.importPlan.bind(this));
        this.dom.importFileInput.addEventListener('change', this.handlers.handleFileSelect.bind(this));

        // View controls
        this.dom.prevWeekBtn.addEventListener('click', this.handlers.handlePrevWeek.bind(this));
        this.dom.nextWeekBtn.addEventListener('click', this.handlers.handleNextWeek.bind(this));
        this.dom.viewToggleBtn.addEventListener('click', this.handlers.handleViewToggle.bind(this));

        // Workout plan interactions
        this.dom.workoutContainer.addEventListener('click', (e) => {
            this.handlers.handleProgressToggle(e);
            this.handlers.handleCardActions(e);
        });
        this.dom.workoutContainer.addEventListener('change', this.handlers.handleWorkoutDataChange.bind(this));

        // History view interactions
        this.dom.historyContainer.addEventListener('click', (e) => {
            this.handlers.handleHistoryClick(e);
            this.handlers.handleCardActions(e);
        });
        this.dom.historyContainer.addEventListener('change', this.handlers.handleWorkoutDataChange.bind(this));
        this.dom.historyContainer.addEventListener('input', this.handlers.handleHistoryTMChange.bind(this));

        // Modal interactions
        this.dom.modalConfirmBtn.addEventListener('click', this.handlers.handleModalConfirm.bind(this));
        this.dom.modalCancelBtn.addEventListener('click', this.handlers.handleModalCancel.bind(this));
    }
};

// ==========================================================================
// 3. UTILITY FUNCTIONS
// ==========================================================================
app.utils = {
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },

    getExerciseIcon(exercise) {
        const icons = { 'Bench Press': '🏋️', 'Squat': '🦵' };
        return icons[exercise] ? `<span class="exercise-icon">${icons[exercise]}</span>` : '';
    },

    getUniqueOptions(program, key) {
        const allValues = program.flatMap(week => week.days.map(day => day[key]));
        return [...new Set(allValues)];
    },

    calculateWeight(tm, intensity) {
        if (tm <= 0) return 0;
        const weight = tm * intensity;
        // Round to one decimal place to handle floating point issues without aggressive snapping
        return Math.round(weight * 10) / 10;
    },

    isDayCompleted(weekData, day, dayIndex, progressData, isHistory, historyIndex) {
        const setsCount = (day.groups && day.groups.length > 0) ? day.groups.length : day.sets;
        if (setsCount === 0) return false;

        for (let i = 0; i < setsCount; i++) {
            const progressId = isHistory
                ? `h${historyIndex}w${weekData.week}d${dayIndex}s${i}`
                : `w${weekData.week}d${dayIndex}s${i}`;
            if (!progressData[progressId]) return false;
        }
        return true;
    }
};

// ==========================================================================
// 4. DATA PERSISTENCE (Dual Mode)
// ==========================================================================
app.storage = {
    async save() {
        if (app.state.operatingMode === 'server') {
            try {
                await app.api.savePlan(app.state);
            } catch (error) {
                console.error('Failed to save plan to server:', error);
                app.render.showModal({ title: 'Save Error', text: 'Could not save data to the server. Your changes might not be persisted.', confirmText: 'OK', cancelText: null });
            }
        } else {
            localStorage.setItem('workoutLogData', JSON.stringify(app.state));
        }
    },

    async load() {
        const currentOperatingMode = app.state.operatingMode;

        const defaultData = {
            benchPressTM: 0, squatTM: 0, progressData: {}, editMode: false, history: [],
            activeProgramKey: 'eightWeekClassic',
            program: app.utils.deepClone(config.programTemplates['eightWeekClassic']),
            viewMode: 'all', currentWeek: 1, displayStyle: 'traditional',
        };

        let loadedData = null;

        if (currentOperatingMode === 'static') {
            const savedData = localStorage.getItem('workoutLogData');
            if (savedData) {
                try {
                    loadedData = JSON.parse(savedData);
                } catch (e) {
                    console.error("Failed to parse data from localStorage.", e);
                    loadedData = null;
                }
            }
        } else { // server mode
            try {
                if (app.api.token) {
                    loadedData = await app.api.getPlan();
                }
            } catch (error) {
                console.error("Failed to load data from server.", error);
                loadedData = null;
            }
        }

        app.state = { ...defaultData, ...loadedData };

        // CRITICAL FIX: Always restore the runtime-detected operating mode
        app.state.operatingMode = currentOperatingMode;
        
        app.state.editMode = false;
        
        // Final validation for crucial data structures
        if (!app.state.program || !Array.isArray(app.state.program) || app.state.program.length === 0) {
            const key = app.state.activeProgramKey || 'eightWeekClassic';
            app.state.program = app.utils.deepClone(config.programTemplates[key]);
        }
        if (!app.state.history || !Array.isArray(app.state.history)) {
            app.state.history = [];
        }
    }
};

// ==========================================================================
// 4.5. API SERVICE
// ==========================================================================
app.api = {
    baseUrl: 'http://localhost:3000',
    token: null,

    async request(endpoint, method = 'GET', body = null) {
        const headers = { 'Content-Type': 'application/json' };
        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }

        const config = {
            method,
            headers,
        };

        if (body) {
            config.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, config);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'API request failed');
            }
            // For 204 No Content response
            if (response.status === 204) {
                return null;
            }
            return response.json();
        } catch (error) {
            console.error(`API Error on ${method} ${endpoint}:`, error);
            app.render.showModal({ title: 'API Error', text: error.message, confirmText: 'OK', cancelText: null });
            throw error;
        }
    },

    // Auth endpoints
    login(username, password) {
        return this.request('/auth/login', 'POST', { username, password });
    },
    register(username, password) {
        return this.request('/auth/register', 'POST', { username, password });
    },

    // Data endpoints
    getPlan() {
        return this.request('/api/plan');
    },
    savePlan(state) {
        return this.request('/api/plan', 'POST', { state });
    },
    getHistory() {
        return this.request('/api/history');
    },
    archiveHistory(state) {
        return this.request('/api/history', 'POST', { state });
    }
};

// ==========================================================================
// 5. RENDERING & UI
// ==========================================================================
app.render = {
    toggleAuthForm(showLogin) {
        app.dom.loginForm.style.display = showLogin ? 'block' : 'none';
        app.dom.registerForm.style.display = showLogin ? 'none' : 'block';
    },
    
    updateAuthView() {
        if (app.state.operatingMode === 'server' && !app.api.token) {
            // Server mode, not logged in: show auth
            app.dom.authContainer.style.display = 'block';
            app.dom.mainContent.style.display = 'none';
            app.dom.mainHeader.style.display = 'none';
            app.dom.logoutBtn.style.display = 'none';
        } else {
            // Static mode or logged in: show main app
            app.dom.authContainer.style.display = 'none';
            app.dom.mainContent.style.display = 'block';
            app.dom.mainHeader.style.display = 'block';
            if (app.state.operatingMode === 'server' && app.api.token) {
                app.dom.logoutBtn.style.display = 'inline-block';
            } else {
                app.dom.logoutBtn.style.display = 'none';
            }
        }
    },
    // Main update function
    updateDisplay() {
        this.updateAuthView();
        if (app.state.operatingMode === 'static' || app.api.token) {
        this.updateTMInputs();
        this.updateProgramSelector(); // Add this
        this.updateHeaderButtons();
        this.updateViewControls();
        this.updateWorkoutPlan();
        this.renderHistory();
        }
    },

    // Component updaters
    updateTMInputs() {
        app.dom.benchTmInput.value = app.state.benchPressTM > 0 ? app.state.benchPressTM : '';
        app.dom.squatTmInput.value = app.state.squatTM > 0 ? app.state.squatTM : '';
    },

    updateProgramSelector() {
        const select = app.dom.programSelect;
        // Populate only if it's empty, to avoid re-creating on every render
        if (select.options.length === 0) {
            const programNames = {
                eightWeekClassic: '8-Week Classic',
                sixWeekPeaking: '6-Week Peaking'
            };
            Object.keys(config.programTemplates).forEach(key => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = programNames[key] || key;
                select.appendChild(option);
            });
        }
        select.value = app.state.activeProgramKey;
    },

    updateHeaderButtons() {
        app.dom.editModeToggle.textContent = app.state.editMode ? 'Done' : 'Edit';
        app.dom.editModeToggle.classList.toggle('btn-secondary', !app.state.editMode);
    },

    updateViewControls() {
        if (app.state.viewMode === 'single') {
            document.body.classList.add('single-week-view');
            app.dom.viewToggleBtn.textContent = 'All Weeks View';
            app.dom.prevWeekBtn.style.display = 'inline-block';
            app.dom.nextWeekBtn.style.display = 'inline-block';
            app.dom.prevWeekBtn.disabled = app.state.currentWeek <= 1;
            app.dom.nextWeekBtn.disabled = app.state.currentWeek >= app.state.program.length;
        } else {
            document.body.classList.remove('single-week-view');
            app.dom.viewToggleBtn.textContent = 'Single Week View';
            app.dom.prevWeekBtn.style.display = 'none';
            app.dom.nextWeekBtn.style.display = 'none';
        }
    },

    updateWorkoutPlan() {
        const tmData = { benchPressTM: app.state.benchPressTM, squatTM: app.state.squatTM };
        this.renderPlan(app.dom.workoutContainer, app.state.program, tmData, app.state.progressData, app.state.editMode, false);
    },
    
    renderHistory() {
        const { historyContainer } = app.dom;
        historyContainer.innerHTML = '';
        const h2 = app.dom.historyView.querySelector('h2');

        if (!app.state.history || app.state.history.length === 0) {
            h2.textContent = 'No Archived Cycles Found';
            return;
        }
        h2.textContent = 'Archived Cycles';

        app.state.history.forEach((archive, index) => {
            const archiveWrapper = document.createElement('div');
            archiveWrapper.className = 'archive-cycle';
            archiveWrapper.innerHTML = this.createHistoryHeaderHTML(archive, index);
            
            const contentWrapper = document.createElement('div');
            const isCollapsed = archive.isCollapsed !== false;
            contentWrapper.className = `archive-content ${isCollapsed ? 'collapsed' : ''}`;
            
            const planContainer = document.createElement('div');
            planContainer.className = 'archived-plan';
            contentWrapper.appendChild(planContainer);
            
            this.renderPlan(planContainer, archive.program, { benchPressTM: archive.benchPressTM, squatTM: archive.squatTM }, archive.progressData, archive.editMode, true, index);
            
            archiveWrapper.appendChild(contentWrapper);
            historyContainer.appendChild(archiveWrapper);
        });
    },

    // The main plan renderer (for both main view and history)
    renderPlan(container, programData, tmData, progressData, isEditable, isHistory, historyIndex = -1) {
        container.innerHTML = '';
        const weeksToRender = app.state.viewMode === 'single' && !isHistory
            ? programData.filter(week => week.week === app.state.currentWeek)
            : programData;

        weeksToRender.forEach(weekData => {
            const weekContainer = document.createElement('div');
            weekContainer.className = 'week-container';
            
            // Create week header with delete button in edit mode
            const weekHeader = document.createElement('h2');
            weekHeader.className = 'week-header';
            weekHeader.innerHTML = `Week ${weekData.week}: ${weekData.phase}`;
            
            if (isEditable && !isHistory) {
                const deleteWeekBtn = document.createElement('button');
                deleteWeekBtn.className = 'btn-delete-week';
                deleteWeekBtn.textContent = '×';
                deleteWeekBtn.title = 'Delete this week';
                deleteWeekBtn.dataset.prop = 'delete-week';
                deleteWeekBtn.dataset.weekIdx = weekData.week - 1;
                weekHeader.appendChild(deleteWeekBtn);
            }
            
            weekContainer.appendChild(weekHeader);

            weekData.days.sort((a, b) => config.dayOrder.indexOf(a.day) - config.dayOrder.indexOf(b.day));
            
            weekData.days.forEach((day, dayIndex) => {
                const dayCard = this.createDayCard(weekData, day, dayIndex, tmData, progressData, isEditable, isHistory, historyIndex);
                weekContainer.appendChild(dayCard);
            });

            if (isEditable) {
                const addDayBtn = document.createElement('button');
                addDayBtn.className = 'btn btn-add-day';
                addDayBtn.textContent = '+ Add Day';
                addDayBtn.dataset.prop = 'add-day';
                addDayBtn.dataset.weekIdx = weekData.week - 1;
                if (isHistory) addDayBtn.dataset.historyIdx = historyIndex;
                weekContainer.appendChild(addDayBtn);
            }
            container.appendChild(weekContainer);
        });

        // Add "+ Add Week" button at the end in edit mode (only for non-history)
        if (isEditable && !isHistory) {
            const addWeekBtn = document.createElement('button');
            addWeekBtn.className = 'btn btn-add-week';
            addWeekBtn.textContent = '+ Add Week';
            addWeekBtn.dataset.prop = 'add-week';
            container.appendChild(addWeekBtn);
        }
    },
    
    // Card creation logic
    createDayCard(weekData, day, dayIndex, tmData, progressData, isEditable, isHistory, historyIndex) {
        // Ensure groups array exists for consistency
        if (!day.groups || day.groups.length === 0) {
            day.groups = Array.from({ length: day.sets || 0 }, () => ({
                reps: day.reps, intensity: day.intensity
            }));
        }

        const dayCard = document.createElement('div');
        dayCard.className = 'card';
        if (isEditable) {
            dayCard.classList.add('editable');
            if (day.displayStyle === 'group') dayCard.classList.add('group-display');
            dayCard.innerHTML = this.createEditableCardContent(weekData, day, dayIndex, tmData, isHistory, historyIndex);
        } else {
            if (app.utils.isDayCompleted(weekData, day, dayIndex, progressData, isHistory, historyIndex)) {
                dayCard.classList.add('day-completed');
            }
            dayCard.innerHTML = this.createDisplayCardContent(weekData, day, dayIndex, tmData, progressData, isHistory, historyIndex);
        }
        return dayCard;
    },

    // HTML generators for card content
    createEditableCardContent(weekData, day, dayIndex, tmData, isHistory, historyIndex) {
        const weekIdx = weekData.week - 1;
        const tm = day.exercise === 'Bench Press' ? tmData.benchPressTM : tmData.squatTM;
        const baseAttrs = { 'week-idx': weekIdx, 'day-idx': dayIndex };
        if (isHistory) baseAttrs['history-idx'] = historyIndex;
        
        const createDataAttrs = (prop, groupIdx) => {
            const attrs = { ...baseAttrs, prop };
            if (groupIdx !== undefined) attrs['group-idx'] = groupIdx;
            return Object.entries(attrs).map(([k, v]) => `data-${k}="${v}"`).join(' ');
        };

        const createSelect = (options, selected, prop) => {
            const validSelected = selected && options.includes(selected) ? selected : options[0];
            return `<select ${createDataAttrs(prop)}>${options.map(o => `<option value="${o}" ${o === validSelected ? 'selected' : ''}>${o}</option>`).join('')}</select>`;
        };
        const createInput = (type, val, prop, groupIdx) => `<input type="${type}" value="${val}" ${createDataAttrs(prop, groupIdx)} ${(prop==='intensity' || prop.includes('increment'))?'step="0.01"':''}>`;
        
        const daySelect = createSelect(config.dayOrder, day.day, 'day');
        const exerciseSelect = createSelect(app.utils.getUniqueOptions(app.state.program, 'exercise'), day.exercise, 'exercise');

        let editorContent;
        if (day.displayStyle === 'group') {
            const groupsHTML = day.groups.map((group, groupIdx) => `
                <div class="group-edit-row">
                    <div class="group-edit-inputs">
                        <div class="form-item"><label>Reps</label>${createInput('number', group.reps, 'reps', groupIdx)}</div>
                        <div class="form-item"><label>Intensity</label>${createInput('number', group.intensity, 'intensity', groupIdx)}</div>
                        <div class="form-item"><label>Weight (kg)</label>${createInput('number', app.utils.calculateWeight(tm, group.intensity), 'weight', groupIdx)}</div>
                    </div>
                    <div class="group-edit-actions"><button class="btn-delete-group" ${createDataAttrs('delete-group', groupIdx)}>&times;</button></div>
                </div>
            `).join('');
            editorContent = `<div class="group-editor-container">${groupsHTML}<button class="btn btn-add-group" ${createDataAttrs('add-group')}>+ Add Group</button></div>`;
        } else {
            editorContent = `
                <div class="form-row form-row-numeric">
                    <div class="form-item"><label>Sets</label>${createInput('number', day.sets, 'sets')}</div>
                    <div class="form-item"><label>Reps</label>${createInput('number', day.reps, 'reps')}</div>
                    <div class="form-item"><label>Intensity</label>${createInput('number', day.intensity, 'intensity')}</div>
                    <div class="form-item"><label>Weight (kg)</label>${createInput('number', app.utils.calculateWeight(tm, day.intensity), 'weight')}</div>
                </div>`;
        }
        
        // 添加自动递增UI（只在非历史记录中显示）
        const autoIncrementUI = !isHistory ? `
            <div class="auto-increment-section">
                <button class="btn-toggle-increment" ${createDataAttrs('toggle-increment')}>
                    ${day.autoIncrement?.enabled ? '✓ Auto Increment' : '+ Auto Increment'}
                </button>
                ${day.autoIncrement?.enabled ? `
                    <div class="increment-settings">
                        <div class="form-item">
                            <label>Weight Inc. (kg/wk)</label>
                            ${createInput('number', day.autoIncrement.weightPerWeek || 0, 'increment-weight')}
                        </div>
                        <div class="form-item">
                            <label>Sets Inc. (/wk)</label>
                            ${createInput('number', day.autoIncrement.setsPerWeek || 0, 'increment-sets')}
                        </div>
                        <div class="form-item">
                            <label>Reps Inc. (/wk)</label>
                            ${createInput('number', day.autoIncrement.repsPerWeek || 0, 'increment-reps')}
                        </div>
                        <button class="btn btn-apply-increment" ${createDataAttrs('apply-increment')}>Apply to Future Weeks</button>
                    </div>
                ` : ''}
            </div>` : '';
        
        return `
            <div class="form-row form-row-select">
                <div class="form-item"><label>Day</label>${daySelect}</div>
                <div class="form-item"><label>Exercise</label>${exerciseSelect}</div>
            </div>
            ${editorContent}
            ${autoIncrementUI}
            <div class="card-actions">
                <button class="btn-toggle-style" title="Toggle view style" ${createDataAttrs('toggle-style')}>⇄</button>
                <button class="btn-delete-day" ${createDataAttrs('delete-day')}>&times;</button>
            </div>`;
    },

    createDisplayCardContent(weekData, day, dayIndex, tmData, progressData, isHistory, historyIndex) {
        const tm = day.exercise === 'Bench Press' ? tmData.benchPressTM : tmData.squatTM;
        const icon = app.utils.getExerciseIcon(day.exercise);
        let content = `<h3>${day.day}</h3>`;
        
        if (day.displayStyle === 'group') {
            const isSingleWeekView = app.state.viewMode === 'single' && !isHistory;
            const groupsHTML = day.groups.map((group, groupIdx) => {
                const progressId = isHistory ? `w${weekData.week}d${dayIndex}s${groupIdx}` : `w${weekData.week}d${dayIndex}s${groupIdx}`;
                const isCompleted = progressData[progressId] ? 'completed' : '';
                
                if (isSingleWeekView) {
                    // 单周模式：保持详细垂直布局
                    return `
                        <div class="group-row group-row-vertical">
                            <div class="group-details">${groupIdx + 1}: <strong>${app.utils.calculateWeight(tm, group.intensity)}kg</strong> (${(group.intensity * 100).toFixed(1)}%) for ${group.reps} reps</div>
                            <div class="group-completion"><div class="progress-box ${isCompleted}" data-progress-id="${progressId}"></div></div>
                        </div>`;
                } else {
                    // 全局模式：紧凑水平布局
                    return `
                        <div class="group-row group-row-compact">
                            <div class="group-header">Set ${groupIdx + 1}</div>
                            <div class="group-stats">
                                <span class="weight">${app.utils.calculateWeight(tm, group.intensity)}kg</span>
                                <span class="reps">×${group.reps}</span>
                            </div>
                            <div class="group-completion"><div class="progress-box ${isCompleted}" data-progress-id="${progressId}"></div></div>
                        </div>`;
                }
            }).join('');
            
            const containerClass = isSingleWeekView ? 'group-progress-container-vertical' : 'group-progress-container-compact';
            content += `<div class="exercise-info"><p>${icon} ${day.exercise}</p></div><div class="${containerClass}">${groupsHTML}</div>`;
        } else {
            const weight = app.utils.calculateWeight(tm, day.intensity);
            const progressBoxes = Array.from({ length: day.sets }, (_, i) => {
                const progressId = `w${weekData.week}d${dayIndex}s${i}`;
                const isCompleted = progressData[progressId] ? 'completed' : '';
                return `<div class="progress-box ${isCompleted}" data-progress-id="${progressId}"></div>`;
            }).join('');
            content += `
                <div class="exercise-info">
                    <p>${icon} ${day.exercise}</p>
                    <p class="weight-details"><strong>${weight}kg</strong> (${(day.intensity * 100).toFixed(1)}%)</p>
                    <p>${day.sets} sets of ${day.reps} reps</p>
                </div>
                <div class="progress-container">${progressBoxes}</div>`;
        }
        return content;
    },
    
    createHistoryHeaderHTML(archive, index) {
        const archiveDate = new Date(archive.archivedAt).toLocaleString();
        const isEditing = archive.editMode || false;
        return `
            <h3 class="archive-header" data-history-index="${index}">
                <span>Cycle Archived on ${archiveDate}</span>
                <div class="archive-tms">
                    <div class="tm-item">
                        <label>Bench TM:</label>
                        <input type="number" value="${archive.benchPressTM}" data-history-index="${index}" data-tm-type="bench" ${!isEditing ? 'disabled' : ''}>
                    </div>
                    <div class="tm-item">
                        <label>Squat TM:</label>
                        <input type="number" value="${archive.squatTM}" data-history-index="${index}" data-tm-type="squat" ${!isEditing ? 'disabled' : ''}>
                    </div>
                </div>
                <button class="btn btn-edit-archive" data-history-index="${index}">${isEditing ? 'Save' : 'Edit'}</button>
                <button class="btn btn-delete-history" data-history-index="${index}">Delete</button>
            </h3>`;
    },

    // Modal display
    showModal({ title, text, bodyHtml = '', confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, onCancel }) {
        this.modalConfirmCallback = onConfirm;
        this.modalCancelCallback = onCancel;
        app.dom.modalTitle.textContent = title;
        app.dom.modalText.style.display = bodyHtml ? 'none' : 'block';
        app.dom.modalBody.style.display = bodyHtml ? 'block' : 'none';
        app.dom.modalText.textContent = text;
        app.dom.modalBody.innerHTML = bodyHtml;

        app.dom.modalConfirmBtn.textContent = confirmText;
        app.dom.modalCancelBtn.textContent = cancelText;
        app.dom.modalConfirmBtn.style.display = confirmText ? 'inline-block' : 'none';
        app.dom.modalCancelBtn.style.display = cancelText ? 'inline-block' : 'none';

        app.dom.modal.classList.add('visible');
    },

    hideModal() {
        app.dom.modal.classList.remove('visible');
        this.modalConfirmCallback = null;
        this.modalCancelCallback = null;
    }
};

// ==========================================================================
// 6. EVENT HANDLERS
// ==========================================================================
app.handlers = {
    async handleLogin(event) {
        event.preventDefault();
        const username = app.dom.loginForm.querySelector('#login-username').value;
        const password = app.dom.loginForm.querySelector('#login-password').value;
        try {
            const result = await app.api.login(username, password);
            app.api.token = result.token;
            localStorage.setItem('authToken', result.token);
            await app.storage.load(); // Reload data from server
            app.render.updateDisplay();
        } catch (error) {
            console.error('Login failed:', error);
            // Error modal is shown by app.api
        }
    },

    async handleRegister(event) {
        event.preventDefault();
        const username = app.dom.registerForm.querySelector('#register-username').value;
        const password = app.dom.registerForm.querySelector('#register-password').value;
        try {
            await app.api.register(username, password);
            app.render.showModal({
                title: 'Registration Successful',
                text: 'You can now log in with your new account.',
                confirmText: 'OK',
                cancelText: null,
                onConfirm: () => {
                    app.render.toggleAuthForm(true);
                }
            });
        } catch (error) {
            console.error('Registration failed:', error);
        }
    },

    handleLogout() {
        app.api.token = null;
        localStorage.removeItem('authToken');
        app.state.operatingMode = 'server'; // remain in server mode
        // Reset state to default, but keep server mode
        const defaultState = {
            benchPressTM: 0, squatTM: 0, progressData: {}, editMode: false, history: [],
            activeProgramKey: 'eightWeekClassic',
            program: app.utils.deepClone(config.programTemplates.eightWeekClassic),
            viewMode: 'all', currentWeek: 1, displayStyle: 'traditional',
            operatingMode: 'server'
        };
        app.state = defaultState;
        app.render.updateDisplay();
    },

    // TM inputs
    async handleTMChange(event) {
        const { id, value } = event.target;
        const tmValue = parseFloat(value) || 0;
        app.state[id === 'bench-tm' ? 'benchPressTM' : 'squatTM'] = tmValue;
        await app.storage.save();
        app.render.updateWorkoutPlan();
    },

    // Progress boxes
    async handleProgressToggle(event) {
        const target = event.target;
        if (target.classList.contains('progress-box')) {
            const progressId = target.dataset.progressId;
            if (!progressId || progressId.startsWith('h')) return;

            app.state.progressData[progressId] = !app.state.progressData[progressId];
            target.classList.toggle('completed');
            
            const dayCard = target.closest('.card');
            const allBoxes = dayCard.querySelectorAll('.progress-box');
            const allCompleted = [...allBoxes].every(box => box.classList.contains('completed'));
            dayCard.classList.toggle('day-completed', allCompleted);
            
            await app.storage.save();
        }
    },

    // Edit mode
    handleEditModeToggle() {
        app.state.editMode = !app.state.editMode;
        app.render.updateDisplay();
    },

    // Data changes in edit mode
    async handleWorkoutDataChange(event) {
        const { historyIdx, weekIdx, dayIdx, groupIdx, prop } = event.target.dataset;
        if (prop === undefined) return;
        
        const isHistory = historyIdx !== undefined;
        const program = isHistory ? app.state.history[historyIdx].program : app.state.program;
        const dayData = program[weekIdx].days[dayIdx];
        
        // 处理自动递增参数
        if (prop.startsWith('increment-')) {
            const incrementProp = prop.replace('increment-', '') + 'PerWeek';
            if (!dayData.autoIncrement) {
                dayData.autoIncrement = { enabled: false };
            }
            dayData.autoIncrement[incrementProp] = parseFloat(event.target.value) || 0;
            await app.storage.save();
            return;
        }
        
        const tm = dayData.exercise === 'Bench Press' 
            ? (isHistory ? app.state.history[historyIdx].benchPressTM : app.state.benchPressTM)
            : (isHistory ? app.state.history[historyIdx].squatTM : app.state.squatTM);

        let value = event.target.type === 'number' ? parseFloat(event.target.value) || 0 : event.target.value;
        const targetData = groupIdx !== undefined ? dayData.groups[groupIdx] : dayData;

        if (prop === 'weight') {
            targetData.intensity = tm > 0 ? parseFloat((value / tm).toFixed(5)) : 0;
        } else {
            targetData[prop] = value;
        }

        if (['sets', 'reps', 'intensity'].includes(prop) && groupIdx === undefined) {
            dayData.groups = Array.from({ length: dayData.sets }, () => ({
                reps: dayData.reps, intensity: dayData.intensity
            }));
        }

        await app.storage.save();
        isHistory ? app.render.renderHistory() : app.render.updateWorkoutPlan();
    },
    
    // Edit/delete buttons on cards, add group/day/week
    async handleCardActions(event) {
        const button = event.target.closest('button');
        if (!button) return;
        const { historyIdx, weekIdx, dayIdx, groupIdx, prop: action } = button.dataset;

        if (!action) return;

        const isHistory = historyIdx !== undefined;
        const program = isHistory ? app.state.history[historyIdx].program : app.state.program;

        // Action that doesn't need dayData
        if (action === 'add-day') {
            const newDay = {
                day: 'Sunday',
                exercise: 'Bench Press',
                sets: 3,
                reps: 5,
                intensity: 0.7,
                groups: Array.from({ length: 3 }, () => ({ reps: 5, intensity: 0.7 }))
            };
            program[weekIdx].days.push(newDay);
            await app.storage.save();
            isHistory ? app.render.renderHistory() : app.render.updateWorkoutPlan();
            return;
        }

        if (action === 'add-week') {
            // Create a new week based on the last week's structure
            const lastWeek = program[program.length - 1];
            const newWeek = {
                week: program.length + 1,
                phase: 'Custom Week',
                days: app.utils.deepClone(lastWeek.days.map(day => ({
                    ...day,
                    displayStyle: undefined
                })))
            };
            program.push(newWeek);
            await app.storage.save();
            app.render.updateWorkoutPlan();
            return;
        }

        if (action === 'delete-week') {
            // Prevent deletion if there's only one week
            if (program.length <= 1) {
                app.render.showModal({
                    title: 'Cannot Delete Week',
                    text: 'You must have at least one week in the training program.',
                    confirmText: 'OK',
                    cancelText: null
                });
                return;
            }
            
            app.render.showModal({
                title: 'Delete Training Week?',
                text: `Are you sure you want to delete Week ${program[weekIdx].week}? This action cannot be undone.`,
                confirmText: 'Delete',
                onConfirm: async () => {
                    // Remove the week
                    program.splice(weekIdx, 1);
                    
                    // Re-number the remaining weeks
                    program.forEach((week, index) => {
                        week.week = index + 1;
                    });
                    
                    await app.storage.save();
                    app.render.updateWorkoutPlan();
                }
            });
            return;
        }

        // Actions that need dayData
        const dayData = program[weekIdx].days[dayIdx];
        if (!dayData) return;

        switch (action) {
            case 'toggle-increment':
                if (!dayData.autoIncrement) {
                    dayData.autoIncrement = {
                        enabled: true,
                        weightPerWeek: 2.5,
                        setsPerWeek: 0,
                        repsPerWeek: 0
                    };
                } else {
                    dayData.autoIncrement.enabled = !dayData.autoIncrement.enabled;
                }
                break;
            case 'apply-increment':
                await this.applyAutoIncrement(weekIdx, dayIdx);
                return;
            case 'toggle-style':
                dayData.displayStyle = dayData.displayStyle === 'group' ? 'traditional' : 'group';
                break;
            case 'add-group':
                const lastGroup = dayData.groups[dayData.groups.length - 1] || { reps: 5, intensity: 0.75 };
                dayData.groups.push({ ...lastGroup });
                dayData.sets = dayData.groups.length;
                break;
            case 'delete-group':
                dayData.groups.splice(groupIdx, 1);
                dayData.sets = dayData.groups.length;
                break;
            case 'delete-day':
                app.render.showModal({
                    title: 'Delete Training Day?',
                    text: 'Are you sure you want to permanently delete this day?',
                    confirmText: 'Delete',
                    onConfirm: async () => {
                        program[weekIdx].days.splice(dayIdx, 1);
                        await app.storage.save();
                        isHistory ? app.render.renderHistory() : app.render.updateWorkoutPlan();
                    }
                });
                return; // Modal handles rerender
        }
        
        await app.storage.save();
        isHistory ? app.render.renderHistory() : app.render.updateWorkoutPlan();
    },

    // Cycle management
    archiveAndStartNewCycle() {
        app.render.showModal({
            title: 'Archive Cycle?',
            text: 'Are you sure? Your current progress will be saved to history.',
            bodyHtml: `
                <div style="margin-top: 15px; display: flex; flex-direction: column; gap: 12px;">
                    <label style="display: block; cursor: pointer; padding: 10px;">
                        <input type="radio" name="newCycleOption" value="current" checked style="margin-right: 10px; cursor: pointer; vertical-align: middle;">
                        <span style="color: var(--primary-text); vertical-align: middle;">
                            Keep current training plan<br>
                            <small style="color: #ccc;">(preserving your adjustments)</small>
                        </span>
                    </label>
                    <label style="display: block; cursor: pointer; padding: 10px;">
                        <input type="radio" name="newCycleOption" value="template" style="margin-right: 10px; cursor: pointer; vertical-align: middle;">
                        <span style="color: var(--primary-text); vertical-align: middle;">Start with fresh template</span>
                    </label>
                </div>
            `,
            onConfirm: async () => {
                const archive = {
                    archivedAt: new Date().toISOString(),
                    program: app.utils.deepClone(app.state.program),
                    progressData: app.utils.deepClone(app.state.progressData),
                    benchPressTM: app.state.benchPressTM,
                    squatTM: app.state.squatTM,
                    editMode: false,
                    isCollapsed: true
                };
                app.state.history.unshift(archive);
                
                // Get user's choice for new cycle
                const selectedOption = document.querySelector('input[name="newCycleOption"]:checked')?.value || 'current';
                
                let newProgram;
                if (selectedOption === 'template') {
                    // Start with fresh template
                    const key = app.state.activeProgramKey || 'eightWeekClassic';
                    newProgram = app.utils.deepClone(config.programTemplates[key]);
                } else {
                    // Keep current program (preserving manual adjustments)
                    const currentProgram = app.state.program;
                    newProgram = app.utils.deepClone(currentProgram);
                    
                    // Reset progress data but keep the structure
                    newProgram.forEach((week, weekIndex) => {
                        week.week = weekIndex + 1;
                        week.days.forEach(day => {
                            // Clear any auto-increment settings for fresh start
                            if (day.autoIncrement) {
                                day.autoIncrement.enabled = false;
                            }
                        });
                    });
                }
                
                app.state.program = newProgram;
                app.state.progressData = {};
                await app.storage.save();
                app.render.updateDisplay();
                app.render.showModal({ title: 'Success!', text: 'Cycle archived. A new cycle is ready.', confirmText: 'OK', cancelText: null });
            }
        });
    },

    async toggleHistoryView() {
        const isHistoryVisible = app.dom.historyView.style.display !== 'none';
        app.dom.historyView.style.display = isHistoryVisible ? 'none' : 'block';
        app.dom.workoutContainer.style.display = isHistoryVisible ? '' : 'none';
        app.dom.tmInputs.style.display = isHistoryVisible ? '' : 'none';
        
        app.dom.editModeToggle.style.display = isHistoryVisible ? 'inline-block' : 'none';
        app.dom.archiveBtn.style.display = isHistoryVisible ? 'inline-block' : 'none';
        app.dom.exportBtn.style.display = isHistoryVisible ? 'inline-block' : 'none';
        app.dom.importBtn.style.display = isHistoryVisible ? 'inline-block' : 'none';
        app.dom.viewControls.style.display = isHistoryVisible ? 'flex' : 'none';
        app.dom.viewHistoryBtn.textContent = isHistoryVisible ? 'History' : 'Back to Cycle';
        
        if (!isHistoryVisible) { // Entering history view
            app.state.history.forEach(archive => {
                archive.editMode = false;
                archive.isCollapsed = true;
            });
            await app.storage.save();
            app.render.renderHistory();
        }
    },
    
    // History View specific actions
    async handleHistoryClick(event) {
        const header = event.target.closest('.archive-header');
        const historyIndex = header?.dataset.historyIndex;
        if (historyIndex === undefined) return;
        
        const archive = app.state.history[historyIndex];

        if (event.target.closest('.btn-delete-history')) {
            app.render.showModal({
                title: 'Delete History?',
                text: 'Are you sure you want to permanently delete this archived cycle?',
                confirmText: 'Delete',
                onConfirm: async () => {
                    app.state.history.splice(historyIndex, 1);
                    await app.storage.save();
                    app.render.renderHistory();
                }
            });
        } else if (event.target.closest('.btn-edit-archive')) {
            archive.editMode = !archive.editMode;
            await app.storage.save();
            app.render.renderHistory();
        } else if (!event.target.closest('button, input')) { // Toggle collapse
            archive.isCollapsed = !archive.isCollapsed;
            await app.storage.save();
            app.render.renderHistory();
        }
    },
    
    handleHistoryTMChange(event) {
        const input = event.target;
        if (input.matches('[data-tm-type]')) {
            const { historyIndex, tmType } = input.dataset;
            app.state.history[historyIndex][tmType === 'bench' ? 'benchPressTM' : 'squatTM'] = parseFloat(input.value) || 0;
            // No save, saved on "Save" button click
        }
    },

    // View mode toggles
    handleViewToggle() {
        app.state.viewMode = app.state.viewMode === 'all' ? 'single' : 'all';
        app.render.updateDisplay();
    },
    handlePrevWeek() {
        if (app.state.currentWeek > 1) {
            app.state.currentWeek--;
            app.render.updateDisplay();
        }
    },
    handleNextWeek() {
        if (app.state.currentWeek < app.state.program.length) {
            app.state.currentWeek++;
            app.render.updateDisplay();
        }
    },

    // Import / Export
    exportPlan() {
        const dataToExport = {
            benchPressTM: app.state.benchPressTM,
            squatTM: app.state.squatTM,
            progressData: app.state.progressData,
            program: app.state.program,
        };
        const dataStr = JSON.stringify(dataToExport, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'workout-plan.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },
    importPlan() {
        app.dom.importFileInput.click();
    },
    handleFileSelect(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                if (typeof importedData.benchPressTM !== 'number' || typeof importedData.squatTM !== 'number' || typeof importedData.progressData !== 'object' || !Array.isArray(importedData.program)) {
                    throw new Error('Invalid file format.');
                }
                app.state.benchPressTM = importedData.benchPressTM;
                app.state.squatTM = importedData.squatTM;
                app.state.progressData = importedData.progressData;
                app.state.program = importedData.program;
                await app.storage.save();
                app.render.updateDisplay();
                app.render.showModal({ title: 'Success!', text: 'Plan imported successfully.', confirmText: 'OK', cancelText: null });
            } catch (error) {
                app.render.showModal({ title: 'Import Error', text: `Failed to import plan: ${error.message}`, confirmText: 'OK', cancelText: null });
            } finally {
                app.dom.importFileInput.value = '';
            }
        };
        reader.readAsText(file);
    },

    // Modal confirmation
    async handleModalConfirm() {
        if (app.render.modalConfirmCallback) {
            await app.render.modalConfirmCallback();
        }
        app.render.hideModal();
    },

    handleModalCancel() {
        if (app.render.modalCancelCallback) {
            app.render.modalCancelCallback();
        }
        app.render.hideModal();
    },

    async applyAutoIncrement(baseWeekIdx, baseDayIdx) {
        const baseWeek = app.state.program[baseWeekIdx];
        const baseDay = baseWeek.days[baseDayIdx];
        
        if (!baseDay.autoIncrement?.enabled) return;
        
        const { weightPerWeek, setsPerWeek, repsPerWeek } = baseDay.autoIncrement;
        const baseTM = baseDay.exercise === 'Bench Press' ? app.state.benchPressTM : app.state.squatTM;
        
        // 从下一周开始应用递增
        for (let w = parseInt(baseWeekIdx) + 1; w < app.state.program.length; w++) {
            const week = app.state.program[w];
            const targetDay = week.days.find(d => 
                d.day === baseDay.day && d.exercise === baseDay.exercise
            );
            
            if (targetDay) {
                const weekDiff = w - baseWeekIdx;
                
                // 应用重量递增（通过intensity）
                if (weightPerWeek !== 0 && baseTM > 0) {
                    const baseWeight = baseTM * baseDay.intensity;
                    const newWeight = baseWeight + (weightPerWeek * weekDiff);
                    targetDay.intensity = parseFloat((newWeight / baseTM).toFixed(5));
                }
                
                // 应用组数递增
                if (setsPerWeek !== 0) {
                    targetDay.sets = Math.max(1, baseDay.sets + (setsPerWeek * weekDiff));
                    // 确保保留原有属性，只更新必要的字段
                    targetDay.groups = Array.from({ length: targetDay.sets }, () => ({
                        reps: targetDay.reps,
                        intensity: targetDay.intensity
                    }));
                }
                
                // 应用次数递增
                if (repsPerWeek !== 0) {
                    targetDay.reps = Math.max(1, baseDay.reps + (repsPerWeek * weekDiff));
                    if (targetDay.groups) {
                        targetDay.groups.forEach(g => g.reps = targetDay.reps);
                    }
                }
                
            }
        }
        
        await app.storage.save();
        app.render.updateWorkoutPlan();
        app.render.showModal({
            title: 'Success',
            text: 'Auto increment has been applied to all future weeks',
            confirmText: 'OK',
            cancelText: null
        });
    },

    handleProgramChange(event) {
        const newProgramKey = event.target.value;
        if (newProgramKey === app.state.activeProgramKey) return;

        app.render.showModal({
            title: 'Change Training Program?',
            text: 'This will archive your current cycle and start a new one with the selected program. Are you sure?',
            confirmText: 'Confirm & Start New',
            onConfirm: async () => {
                // 1. Archive current cycle
                const archive = {
                    archivedAt: new Date().toISOString(),
                    program: app.utils.deepClone(app.state.program),
                    progressData: app.utils.deepClone(app.state.progressData),
                    benchPressTM: app.state.benchPressTM,
                    squatTM: app.state.squatTM,
                    editMode: false,
                    isCollapsed: true,
                    programKey: app.state.activeProgramKey // Store which program was used
                };
                app.state.history.unshift(archive);

                // 2. Start new cycle with the new program
                app.state.activeProgramKey = newProgramKey;
                app.state.program = app.utils.deepClone(config.programTemplates[newProgramKey]);
                app.state.progressData = {};
                app.state.currentWeek = 1;
                app.state.viewMode = 'all';

                // 3. Save and re-render
                await app.storage.save();
                app.render.updateDisplay();
                app.render.showModal({ title: 'Success!', text: `New ${newProgramKey} cycle started.`, confirmText: 'OK', cancelText: null });
            },
            onCancel: () => {
                // If user cancels, revert the dropdown to its original value and re-render
                event.target.value = app.state.activeProgramKey;
                app.render.updateDisplay(); // Force a re-render to ensure consistency
            }
        });
    }
};

// ==========================================================================
// 7. APP INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', async () => {
    await app.init();
});
