// PDF Database organized by category
const pdfDatabase = {
    brigadeiros: [
        { name: "Brigadeiros - Apostila Completa", file: "docs/brigadeiros/BRIGADEIROS.pdf", size: "2.5 MB" },
        { name: "Brigadeiro Gourmet sem Fogo", file: "docs/brigadeiros/Brigadeiro Gourmet sem Fogão.pdf", size: "1.8 MB" },
        { name: "120 Receitas de Caseirinhos", file: "docs/brigadeiros/120 RECEITAS DE CASEIRINHOS HELENA.pdf.pdf", size: "4.1 MB" },
        { name: "Trufas - Receitas Variadas", file: "docs/brigadeiros/TRUFAS (3).pdf", size: "2.0 MB" },
        { name: "Ebook Cones Trufados", file: "docs/brigadeiros/714462297-eBook-Cones-Trufados-421e0b64f9c94dfaa4881988049b6198.pdf", size: "5.5 MB" },
        { name: "Apostila Cone Trufado", file: "docs/brigadeiros/Apostila Receitas de Cone Trufado.pdf", size: "2.8 MB" },
        { name: "Receitas de Bem Casado", file: "docs/brigadeiros/Apostila Receitas de Bem Casado.pdf", size: "1.5 MB" },
        { name: "Ovos de Páscoa", file: "docs/brigadeiros/Apostila Receitas de Ovos de Páscoa 02.pdf", size: "3.0 MB" }
    ],
    recheios: [
        { name: "Recheios Sem Fogo - Vol 2", file: "docs/recheios/890600399-Recheios-Sem-Fogo-Vol-2.pdf", size: "3.5 MB" },
        { name: "Apostila de Recheios", file: "docs/recheios/Apostila Receitas de Recheios.pdf", size: "2.8 MB" },
        { name: "Recheios Volume 2", file: "docs/recheios/Apostila Receitas de Recheios 02.pdf", size: "2.5 MB" },
        { name: "Recheios Versão 2", file: "docs/recheios/Apostila Receitas de Recheios 2.pdf", size: "2.3 MB" },
        { name: "Recheios Que Não Vão ao Fogo 03", file: "docs/recheios/Apostila Receitas de Recheios Que Não Vão ao Fogo 03.pdf", size: "2.0 MB" },
        { name: "Recheios Que Não Vão ao Fogo 04", file: "docs/recheios/Apostila Receitas de Recheios Que Não Vão ao Fogo 04.pdf", size: "1.9 MB" },
        { name: "Receitas de Recheios Sem Fogo 03", file: "docs/recheios/Receitas de Recheios Sem Fogo 03.pdf", size: "2.2 MB" },
        { name: "Recheio Sem Fogo 3", file: "docs/recheios/RECHEIO SEM FOGO 3.pdf", size: "1.8 MB" }
    ],
    bolos: [
        { name: "Bolos Caseiros", file: "docs/bolos/BOLOS CASEIROS (9).pdf", size: "3.0 MB" },
        { name: "Bolos Sem Glúten", file: "docs/bolos/BOLOS SEM GLÚTEN (1).pdf", size: "2.5 MB" },
        { name: "Bolo no Pote", file: "docs/bolos/BOLO NO POTE (1) - OTIMIZADO (3).pdf", size: "2.8 MB" },
        { name: "Bolo no Pote Helena", file: "docs/bolos/bolo no pote helena silva.pdf", size: "2.2 MB" },
        { name: "Fatias de Bolo", file: "docs/bolos/Apostila Receitas de Fatias-de-Bolo.pdf", size: "2.0 MB" },
        { name: "Rocambole", file: "docs/bolos/Apostila Receitas de Rocambole.pdf", size: "1.8 MB" },
        { name: "Bolo de Rolo", file: "docs/bolos/Apostila Receitas de Bolo de Rolo.pdf", size: "2.1 MB" },
        { name: "Brownies Perfeitos", file: "docs/bolos/brownies perfeitos.pdf", size: "1.5 MB" },
        { name: "Cheesecake", file: "docs/bolos/Apostila Receitas de CHEESECAKE.pdf", size: "3.2 MB" },
        { name: "Torta na Travessa", file: "docs/bolos/Apostila Receitas de Torta na Travessa.pdf", size: "2.5 MB" },
        { name: "Tortas Doces", file: "docs/bolos/Apostila Receitas de Tortas Doce.pdf", size: "2.8 MB" },
        { name: "Quindim", file: "docs/bolos/Apostila Receitas de Quindim.pdf", size: "1.2 MB" },
        { name: "Receitas de Liquidificador", file: "docs/bolos/Apostila Receitas de Liquidificador.pdf", size: "2.0 MB" },
        { name: "Pudim sem Fogo", file: "docs/bolos/pudim sem fogo helena silva.pdf", size: "1.8 MB" },
        { name: "Tesouro Açucarado", file: "docs/bolos/tesouro açucarado.pdf", size: "2.5 MB" }
    ],
    "doces-finos": [
        { name: "Doces Finos", file: "docs/doces-finos/Apostila Receitas de Doces Finos.pdf", size: "3.0 MB" },
        { name: "Doces Fitness", file: "docs/doces-finos/Apostila Receitas de Doces Fitness.pdf", size: "2.2 MB" },
        { name: "Cookies", file: "docs/doces-finos/Apostila Receitas de Cookies.pdf", size: "2.5 MB" },
        { name: "Barras Recheadas", file: "docs/doces-finos/Apostila Receitas de Barras Recheadas.pdf", size: "1.8 MB" },
        { name: "Donuts", file: "docs/doces-finos/DONUTS - OTIMIZADO (1).pdf", size: "2.0 MB" }
    ],
    "geladinhos-e-geleias": [
        { name: "Geladinho Gourmet", file: "docs/geladinhos-e-geleias/Apostila Receitas de Geladinho Gourmet 02.pdf", size: "2.5 MB" },
        { name: "Geleias Caseiras", file: "docs/geladinhos-e-geleias/Apostila Receitas de Geleias Caseiras.pdf", size: "1.8 MB" }
    ],
    "salgados-e-massas": [
        { name: "Empadas", file: "docs/salgados-e-massas/Apostila Receitas de Empadas.pdf", size: "2.0 MB" },
        { name: "Cuscuz Gourmet", file: "docs/salgados-e-massas/Apostila Receitas de Cuscuz Gourmet 03.pdf", size: "1.5 MB" },
        { name: "Pastel de Feira", file: "docs/salgados-e-massas/Apostila Receitas de Pastel de Feira.pdf", size: "1.8 MB" },
        { name: "Massas Variadas", file: "docs/salgados-e-massas/MASSAS (4).pdf", size: "2.2 MB" },
        { name: "Salgados", file: "docs/salgados-e-massas/SALGADOS - OTIMIZADO (2).pdf", size: "2.5 MB" }
    ],
    outros: [
        { name: "Delícias Práticas Sem Fogo", file: "docs/outros/Delícias Práticas Sem a Necessidade de Fogo.pdf", size: "3.5 MB" },
        { name: "Utensílios Essenciais", file: "docs/outros/UTENCILIOS (1) - OTIMIZADO (1).pdf", size: "1.2 MB" },
        { name: "Guia de Validade e Conservação", file: "docs/outros/Guia-Validade-Conservacao-Recheios.pdf", size: "1.0 MB" }
    ]
};

// Current category
let currentCategory = 'brigadeiros';

// Access code - you can change this to your preferred code
const ACCESS_CODE = 'BRIGADEIRO2026';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadPDFs('brigadeiros');
    setupCategoryTabs();
    setupMobileMenu();
    checkExclusiveAccess();
    checkCalculatorLock();
    loadSavedRecipes();
});

// Setup category tabs
function setupCategoryTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            loadPDFs(currentCategory);
        });
    });
}

// Load PDFs for category
function loadPDFs(category) {
    const grid = document.getElementById('pdfsGrid');
    const pdfs = pdfDatabase[category] || [];
    
    if (pdfs.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <p>Nenhum PDF disponível nesta categoria</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = pdfs.map(pdf => `
        <div class="pdf-card">
            <div class="pdf-icon">
                <i class="fas fa-file-pdf"></i>
            </div>
            <h3>${pdf.name}</h3>
            <p class="pdf-size"><i class="fas fa-file"></i> ${pdf.size}</p>
            <a href="${pdf.file}" target="_blank" class="pdf-download-btn">
                <i class="fas fa-download"></i> Baixar PDF
            </a>
        </div>
    `).join('');
}

// Mobile menu
function setupMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.nav');
    
    toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
}

// Calculator functions
function addIngredient() {
    const list = document.getElementById('ingredientsList');
    const row = document.createElement('div');
    row.className = 'ingredient-row';
    row.innerHTML = `
        <input type="text" placeholder="Nome do ingrediente" class="ingredient-name">
        <input type="number" placeholder="Quantidade" class="ingredient-qty" step="0.01">
        <select class="ingredient-unit">
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="l">litros</option>
            <option value="ml">ml</option>
            <option value="un">unidades</option>
            <option value="pacote">pacote(s)</option>
            <option value="lata">lata(s)</option>
            <option value="caixa">caixa(s)</option>
        </select>
        <input type="number" placeholder="Preço unitário (R$)" class="ingredient-price" step="0.01">
        <button class="remove-ingredient" onclick="removeIngredient(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    list.appendChild(row);
}

function removeIngredient(btn) {
    const rows = document.querySelectorAll('.ingredient-row');
    if (rows.length > 1) {
        btn.closest('.ingredient-row').remove();
    }
}

function calculatePrice() {
    // Get ingredients
    const rows = document.querySelectorAll('.ingredient-row');
    let totalIngredients = 0;
    
    rows.forEach(row => {
        const qty = parseFloat(row.querySelector('.ingredient-qty').value) || 0;
        const price = parseFloat(row.querySelector('.ingredient-price').value) || 0;
        totalIngredients += qty * price;
    });
    
    // Get additional costs
    const packaging = parseFloat(document.getElementById('packagingCost').value) || 0;
    const labor = parseFloat(document.getElementById('laborCost').value) || 0;
    const other = parseFloat(document.getElementById('otherCosts').value) || 0;
    const additionalCosts = packaging + labor + other;
    
    // Get production info
    const quantity = parseInt(document.getElementById('quantityProduced').value) || 1;
    const profitMargin = parseFloat(document.getElementById('profitMargin').value) || 100;
    
    // Calculate costs
    const totalCost = totalIngredients + additionalCosts;
    const costPerUnit = totalCost / quantity;
    const profitPerUnit = costPerUnit * (profitMargin / 100);
    const suggestedPrice = costPerUnit + profitPerUnit;
    const totalProfit = profitPerUnit * quantity;
    
    // Update display
    document.getElementById('totalIngredientsCost').textContent = formatCurrency(totalIngredients);
    document.getElementById('costPerUnit').textContent = formatCurrency(costPerUnit);
    document.getElementById('suggestedPrice').textContent = formatCurrency(suggestedPrice);
    document.getElementById('profitPerUnit').textContent = formatCurrency(profitPerUnit);
    document.getElementById('totalProfit').textContent = formatCurrency(totalProfit);
    
    // Update quick prices
    document.getElementById('price1').textContent = formatCurrency(suggestedPrice);
    document.getElementById('price6').textContent = formatCurrency(suggestedPrice * 6 * 0.95); // 5% discount for 6
    document.getElementById('price12').textContent = formatCurrency(suggestedPrice * 12 * 0.90); // 10% discount for 12
    document.getElementById('price24').textContent = formatCurrency(suggestedPrice * 24 * 0.85); // 15% discount for 24
    
    // Show result with animation
    const result = document.getElementById('calculatorResult');
    result.style.animation = 'none';
    result.offsetHeight; // Trigger reflow
    result.style.animation = 'pulse 0.5s ease';
    
    // Track usage - lock after first use
    const usageCount = parseInt(localStorage.getItem('calculatorUsage') || '0');
    localStorage.setItem('calculatorUsage', usageCount + 1);
    
    if (usageCount >= 1) {
        // Lock calculator after first use
        setTimeout(() => {
            lockCalculator();
        }, 1500);
    }
}

function lockCalculator() {
    const calcContent = document.getElementById('calculatorContent');
    calcContent.innerHTML = `
        <div class="calculator-locked-final">
            <div class="lock-card-final">
                <div class="lock-icon-final">
                    <i class="fas fa-lock"></i>
                </div>
                <h3>Calculadora Bloqueada!</h3>
                <p>Para continuar usando a calculadora, faça o pagamento de <strong>R$ 10,00</strong> e envie o comprovante.</p>
                
                <div class="payment-box">
                    <h4><i class="fas fa-qrcode"></i> PIX</h4>
                    <div class="pix-key">
                        <span>Chave PIX:</span>
                        <strong>31 987039615</strong>
                    </div>
                </div>
                
                <div class="whatsapp-box">
                    <h4><i class="fab fa-whatsapp"></i> WhatsApp</h4>
                    <p>Envie o comprovante e receba seu código de acesso:</p>
                    <a href="https://wa.me/5531987039615?text=Olá! Fiz o pagamento de R$10 para desbloquear a calculadora. Segue o comprovante." target="_blank" class="whatsapp-btn">
                        <i class="fab fa-whatsapp"></i> Enviar no WhatsApp
                    </a>
                </div>
                
                <div class="unlock-final">
                    <p>Já tem o código?</p>
                    <button onclick="openExclusiveModal('calculator')" class="unlock-final-btn">
                        <i class="fas fa-key"></i> Digitar Código
                    </button>
                </div>
            </div>
        </div>
    `;
}

function formatCurrency(value) {
    return 'R$ ' + value.toFixed(2).replace('.', ',');
}

// Recipe saving
function saveRecipe() {
    const rows = document.querySelectorAll('.ingredient-row');
    const ingredients = [];
    
    rows.forEach(row => {
        const name = row.querySelector('.ingredient-name').value;
        const qty = row.querySelector('.ingredient-qty').value;
        const unit = row.querySelector('.ingredient-unit').value;
        const price = row.querySelector('.ingredient-price').value;
        
        if (name && qty && price) {
            ingredients.push({ name, qty, unit, price });
        }
    });
    
    if (ingredients.length === 0) {
        alert('Adicione pelo menos um ingrediente antes de salvar!');
        return;
    }
    
    const recipe = {
        id: Date.now(),
        name: ingredients.map(i => i.name).join(', ').substring(0, 50),
        ingredients: ingredients,
        packaging: document.getElementById('packagingCost').value,
        labor: document.getElementById('laborCost').value,
        other: document.getElementById('otherCosts').value,
        quantity: document.getElementById('quantityProduced').value,
        profit: document.getElementById('profitMargin').value,
        price: document.getElementById('suggestedPrice').textContent
    };
    
    // Get saved recipes
    let savedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    savedRecipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(savedRecipes));
    
    loadSavedRecipes();
    alert('Receita salva com sucesso!');
}

function loadSavedRecipes() {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const list = document.getElementById('recipesList');
    
    if (savedRecipes.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 20px;">Nenhuma receita salva ainda</p>';
        return;
    }
    
    list.innerHTML = savedRecipes.map(recipe => `
        <div class="recipe-item">
            <div class="recipe-info">
                <h4>${recipe.name}</h4>
                <p>${recipe.ingredients.length} ingredientes | ${recipe.price}</p>
            </div>
            <div class="recipe-actions">
                <button class="btn-view" onclick="viewRecipe(${recipe.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-delete" onclick="deleteRecipe(${recipe.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function viewRecipe(id) {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipe = savedRecipes.find(r => r.id === id);
    
    if (recipe) {
        // Fill the form with recipe data
        const list = document.getElementById('ingredientsList');
        list.innerHTML = '';
        
        recipe.ingredients.forEach(ing => {
            const row = document.createElement('div');
            row.className = 'ingredient-row';
            row.innerHTML = `
                <input type="text" placeholder="Nome do ingrediente" class="ingredient-name" value="${ing.name}">
                <input type="number" placeholder="Quantidade" class="ingredient-qty" step="0.01" value="${ing.qty}">
                <select class="ingredient-unit">
                    <option value="kg" ${ing.unit === 'kg' ? 'selected' : ''}>kg</option>
                    <option value="g" ${ing.unit === 'g' ? 'selected' : ''}>g</option>
                    <option value="l" ${ing.unit === 'l' ? 'selected' : ''}>litros</option>
                    <option value="ml" ${ing.unit === 'ml' ? 'selected' : ''}>ml</option>
                    <option value="un" ${ing.unit === 'un' ? 'selected' : ''}>unidades</option>
                    <option value="pacote" ${ing.unit === 'pacote' ? 'selected' : ''}>pacote(s)</option>
                    <option value="lata" ${ing.unit === 'lata' ? 'selected' : ''}>lata(s)</option>
                    <option value="caixa" ${ing.unit === 'caixa' ? 'selected' : ''}>caixa(s)</option>
                </select>
                <input type="number" placeholder="Preço unitário (R$)" class="ingredient-price" step="0.01" value="${ing.price}">
                <button class="remove-ingredient" onclick="removeIngredient(this)">
                    <i class="fas fa-times"></i>
                </button>
            `;
            list.appendChild(row);
        });
        
        document.getElementById('packagingCost').value = recipe.packaging || 0;
        document.getElementById('laborCost').value = recipe.labor || 0;
        document.getElementById('otherCosts').value = recipe.other || 0;
        document.getElementById('quantityProduced').value = recipe.quantity || 30;
        document.getElementById('profitMargin').value = recipe.profit || 100;
        
        // Scroll to calculator
        document.getElementById('calculadora').scrollIntoView({ behavior: 'smooth' });
        
        // Calculate
        calculatePrice();
    }
}

function deleteRecipe(id) {
    if (confirm('Tem certeza que deseja excluir esta receita?')) {
        let savedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
        savedRecipes = savedRecipes.filter(r => r.id !== id);
        localStorage.setItem('recipes', JSON.stringify(savedRecipes));
        loadSavedRecipes();
    }
}

// Check if calculator should be locked
function checkCalculatorLock() {
    const usageCount = parseInt(localStorage.getItem('calculatorUsage') || '0');
    const isUnlocked = localStorage.getItem('calculatorUnlocked') === 'true';
    
    // If used more than once and not unlocked with code, lock it
    if (usageCount >= 1 && !isUnlocked) {
        lockCalculator();
    }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// LOCK SYSTEM FUNCTIONS
// ============================================

// Current item to unlock
let currentUnlockItem = null;

// Check if items are unlocked
function checkExclusiveAccess() {
    const items = ['bonus1', 'bonus2', 'calculator'];
    
    items.forEach(item => {
        const isUnlocked = localStorage.getItem(`${item}Unlocked`) === 'true';
        const card = document.getElementById(`${item}Card`);
        const lockEl = card.querySelector('.exclusive-lock');
        const unlockBtn = card.querySelector('.exclusive-unlock-btn');
        const unlockedEl = document.getElementById(`${item}Unlocked`);
        
        if (isUnlocked) {
            card.classList.remove('locked');
            lockEl.style.display = 'none';
            unlockBtn.style.display = 'none';
            unlockedEl.style.display = 'block';
        }
    });
}

// Open exclusive modal
function openExclusiveModal(item) {
    currentUnlockItem = item;
    document.getElementById('unlockModal').classList.add('active');
    document.getElementById('accessCode').value = '';
    document.getElementById('modalError').classList.remove('show');
}

// Close unlock modal
function closeUnlockModal() {
    document.getElementById('unlockModal').classList.remove('active');
    currentUnlockItem = null;
}

// Validate access code
function validateCode() {
    const code = document.getElementById('accessCode').value.trim().toUpperCase();
    const errorEl = document.getElementById('modalError');
    
    if (code === ACCESS_CODE) {
        // Unlock the current item
        if (currentUnlockItem) {
            localStorage.setItem(`${currentUnlockItem}Unlocked`, 'true');
        }
        
        // Also unlock all items (since one code unlocks everything)
        localStorage.setItem('bonus1Unlocked', 'true');
        localStorage.setItem('bonus2Unlocked', 'true');
        localStorage.setItem('calculatorUnlocked', 'true');
        
        closeUnlockModal();
        checkExclusiveAccess();
        
        // Show success message
        alert('Acesso desbloqueado com sucesso! Agora você pode acessar todos os conteúdos exclusivos.');
    } else {
        errorEl.classList.add('show');
    }
}

// Close modal on overlay click
document.getElementById('unlockModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeUnlockModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeUnlockModal();
    }
});

// Function to reset access (for testing or admin)
function resetAccess() {
    localStorage.removeItem('bonus1Unlocked');
    localStorage.removeItem('bonus2Unlocked');
    localStorage.removeItem('calculatorUnlocked');
    checkExclusiveAccess();
    alert('Acesso resetado. Todos os conteúdos foram bloqueados novamente.');
}
