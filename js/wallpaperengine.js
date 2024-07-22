window.wallpaperPropertyListener = {
	applyUserProperties: function (properties) {
		if (properties.numberOfActions) {
			config.numberOfActions = properties.numberOfActions.value;
		}
		if (properties.lookUpProbability) {
			probabilities.action2 = probabilities.action2.map(item => {
				if (item.name === "lookUp") {
					item.probability = properties.lookUpProbability.value;
				}
				return item;
			});
		}
		if (properties.drinkProbability) {
			probabilities.action2 = probabilities.action2.map(item => {
				if (item.name === "drink") {
					item.probability = properties.drinkProbability.value;
				}
				return item;
			});
		}
		if (properties.lookAtCanProbability) {
			probabilities.action2 = probabilities.action2.map(item => {
				if (item.name === "lookAtCan") {
					item.probability = properties.lookAtCanProbability.value;
				}
				return item;
			});
		}
		if (properties.easterEggProbability) {
			probabilities.action2 = probabilities.action2.map(item => {
				if (item.name === "easterEgg") {
					item.probability = properties.easterEggProbability.value;
				}
				return item;
			});
		}
		if (properties.disableBuyAndThrow) {
			config.disableBuyAndThrow = properties.disableBuyAndThrow.value;
		}
		if (properties.easterEgg) {
			config.easterEgg = properties.easterEgg.value;
		}
	}
};
