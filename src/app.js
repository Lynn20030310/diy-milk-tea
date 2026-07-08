const data = {
  teas: [
    { id: "jasmine", name: "茉莉绿茶", note: "清爽花香", price: 12, calories: 30, color: "#b7c873" },
    { id: "oolong", name: "乌龙茶", note: "烘焙茶香", price: 13, calories: 35, color: "#b78355" },
    { id: "black", name: "红茶", note: "醇厚茶感", price: 12, calories: 40, color: "#9a5538" },
    { id: "pu-erh", name: "普洱茶", note: "木质回甘", price: 14, calories: 35, color: "#6f4b3e" }
  ],
  milks: [
    { id: "fresh", name: "鲜牛乳", note: "经典顺滑", price: 4, calories: 120 },
    { id: "oat", name: "燕麦奶", note: "谷物轻甜", price: 5, calories: 100 },
    { id: "coconut", name: "椰乳", note: "热带清香", price: 5, calories: 115 },
    { id: "cream", name: "厚乳", note: "浓郁奶香", price: 6, calories: 160 }
  ],
  ice: [
    { id: "hot", name: "热" },
    { id: "none", name: "去冰" },
    { id: "less", name: "少冰" },
    { id: "normal", name: "正常冰" }
  ],
  toppings: [
    { id: "pearl", name: "黑糖珍珠", note: "+¥3", price: 3, calories: 90 },
    { id: "taro", name: "芋圆", note: "+¥3", price: 3, calories: 85 },
    { id: "pudding", name: "布丁", note: "+¥4", price: 4, calories: 110 },
    { id: "grass", name: "仙草", note: "+¥2", price: 2, calories: 45 },
    { id: "foam", name: "芝士奶盖", note: "+¥5", price: 5, calories: 150 },
    { id: "crystal", name: "寒天晶球", note: "+¥3", price: 3, calories: 60 }
  ],
  sweetness: [
    { name: "无糖", calories: 0 },
    { name: "三分糖", calories: 35 },
    { name: "五分糖", calories: 65 },
    { name: "七分糖", calories: 95 },
    { name: "全糖", calories: 130 }
  ],
  presets: [
    { name: "清爽茉莉椰椰", tea: "jasmine", milk: "coconut", sweetness: 1, ice: "less", toppings: ["crystal"] },
    { name: "厚乳黑糖珍珠", tea: "black", milk: "cream", sweetness: 2, ice: "none", toppings: ["pearl", "foam"] },
    { name: "乌龙燕麦芋圆", tea: "oolong", milk: "oat", sweetness: 1, ice: "normal", toppings: ["taro"] }
  ]
};

const state = {
  tea: "jasmine",
  milk: "fresh",
  sweetness: 1,
  ice: "less",
  toppings: []
};

const els = {
  teaOptions: document.querySelector("#teaOptions"),
  milkOptions: document.querySelector("#milkOptions"),
  iceOptions: document.querySelector("#iceOptions"),
  toppingOptions: document.querySelector("#toppingOptions"),
  sweetness: document.querySelector("#sweetness"),
  sweetnessLabel: document.querySelector("#sweetnessLabel"),
  drinkName: document.querySelector("#drinkName"),
  drinkPrice: document.querySelector("#drinkPrice"),
  drinkCalories: document.querySelector("#drinkCalories"),
  recipeTitle: document.querySelector("#recipeTitle"),
  recipeDescription: document.querySelector("#recipeDescription"),
  tagList: document.querySelector("#tagList"),
  presetList: document.querySelector("#presetList"),
  savedList: document.querySelector("#savedList"),
  savedCount: document.querySelector("#savedCount"),
  saveRecipe: document.querySelector("#saveRecipe"),
  teaFill: document.querySelector("#teaFill")
};

function findById(items, id) {
  return items.find((item) => item.id === id);
}

function createChip(item, active, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `chip${active ? " is-active" : ""}`;
  button.innerHTML = `<strong>${item.name}</strong><span>${item.note}</span>`;
  button.addEventListener("click", onClick);
  return button;
}

function renderOptions() {
  els.teaOptions.replaceChildren(
    ...data.teas.map((tea) =>
      createChip(tea, tea.id === state.tea, () => {
        state.tea = tea.id;
        render();
      })
    )
  );

  els.milkOptions.replaceChildren(
    ...data.milks.map((milk) =>
      createChip(milk, milk.id === state.milk, () => {
        state.milk = milk.id;
        render();
      })
    )
  );

  els.iceOptions.replaceChildren(
    ...data.ice.map((ice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = ice.id === state.ice ? "is-active" : "";
      button.textContent = ice.name;
      button.addEventListener("click", () => {
        state.ice = ice.id;
        render();
      });
      return button;
    })
  );

  els.toppingOptions.replaceChildren(
    ...data.toppings.map((topping) =>
      createChip(topping, state.toppings.includes(topping.id), () => {
        if (state.toppings.includes(topping.id)) {
          state.toppings = state.toppings.filter((id) => id !== topping.id);
        } else if (state.toppings.length < 3) {
          state.toppings = [...state.toppings, topping.id];
        }
        render();
      })
    )
  );
}

function getRecipe() {
  const tea = findById(data.teas, state.tea);
  const milk = findById(data.milks, state.milk);
  const ice = findById(data.ice, state.ice);
  const sweetness = data.sweetness[state.sweetness];
  const toppings = state.toppings.map((id) => findById(data.toppings, id));
  const price = tea.price + milk.price + toppings.reduce((sum, item) => sum + item.price, 0);
  const calories = tea.calories + milk.calories + sweetness.calories + toppings.reduce((sum, item) => sum + item.calories, 0);
  const name = `${tea.name.replace("茶", "")}${milk.name.replace("鲜", "").replace("乳", "")}`;
  return { tea, milk, ice, sweetness, toppings, price, calories, name };
}

function renderSummary() {
  const recipe = getRecipe();
  els.sweetnessLabel.textContent = recipe.sweetness.name;
  els.drinkName.textContent = recipe.name;
  els.drinkPrice.textContent = `¥${recipe.price}`;
  els.drinkCalories.textContent = `${recipe.calories} kcal`;
  els.recipeTitle.textContent = recipe.name;
  els.recipeDescription.textContent = `${recipe.tea.note}、${recipe.milk.note}、${recipe.sweetness.name}、${recipe.ice.name}。`;
  els.teaFill.style.background = recipe.tea.color;
  els.teaFill.style.height = recipe.ice.id === "hot" ? "82%" : "72%";

  const tags = [
    recipe.tea.name,
    recipe.milk.name,
    recipe.sweetness.name,
    recipe.ice.name,
    ...recipe.toppings.map((item) => item.name)
  ];
  els.tagList.replaceChildren(...tags.map((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    return span;
  }));
}

function renderPresets() {
  els.presetList.replaceChildren(
    ...data.presets.map((preset) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "preset-card";
      button.innerHTML = `<strong>${preset.name}</strong><span>点击套用这杯灵感配方</span>`;
      button.addEventListener("click", () => {
        Object.assign(state, preset);
        render();
      });
      return button;
    })
  );
}

function getSavedRecipes() {
  return JSON.parse(localStorage.getItem("milkTeaRecipes") || "[]");
}

function renderSaved() {
  const saved = getSavedRecipes();
  els.savedCount.textContent = `${saved.length} 个`;
  if (!saved.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "还没有保存配方，调一杯喜欢的试试。";
    els.savedList.replaceChildren(empty);
    return;
  }

  els.savedList.replaceChildren(
    ...saved.map((recipe) => {
      const card = document.createElement("article");
      card.className = "saved-card";
      card.innerHTML = `<strong>${recipe.name} · ¥${recipe.price}</strong><span>${recipe.description}</span>`;
      return card;
    })
  );
}

function saveCurrentRecipe() {
  const recipe = getRecipe();
  const saved = getSavedRecipes();
  const description = `${recipe.tea.name} / ${recipe.milk.name} / ${recipe.sweetness.name} / ${recipe.ice.name}`;
  const next = [{ name: recipe.name, price: recipe.price, description }, ...saved].slice(0, 8);
  localStorage.setItem("milkTeaRecipes", JSON.stringify(next));
  renderSaved();
}

function render() {
  els.sweetness.value = state.sweetness;
  renderOptions();
  renderSummary();
}

els.sweetness.addEventListener("input", (event) => {
  state.sweetness = Number(event.target.value);
  render();
});

els.saveRecipe.addEventListener("click", saveCurrentRecipe);

renderPresets();
renderSaved();
render();
