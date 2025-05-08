define("MyCompany/WidgetDynamicUI", [], function () {
    "use strict";

    function init(widget) {
        var yesNoRadios = document.getElementsByName("yesno");
        var dropdown = document.getElementById("dropdownContainer");
        var testSelect = document.getElementById("testOptions");
        var dynamicFields = document.getElementById("dynamicFields");

        const clearDynamicFields = () => {
            dynamicFields.innerHTML = "";
        };

        const renderTest1Fields = () => {
            dynamicFields.innerHTML = `
                <div class="field-group"><input type="text" placeholder="Text Box 1" /></div>
                <div class="field-group"><input type="text" placeholder="Text Box 2" /></div>
                <div class="field-group"><textarea placeholder="Text Area"></textarea></div>
                <div class="field-group"><button>Save</button> <button>Cancel</button></div>
            `;
        };

        const renderTest2Fields = () => {
            dynamicFields.innerHTML = `
                <div class="field-group">
                    <select>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>
                <div class="field-group"><input type="text" placeholder="Text Box 1" /></div>
                <div class="field-group"><input type="text" placeholder="Text Box 2" /></div>
                <div class="field-group"><button>Save</button> <button>Cancel</button></div>
            `;
        };

        const renderTest3Fields = () => {
            dynamicFields.innerHTML = `
                <div class="field-group"><input type="text" placeholder="Text Box" /></div>
                <div class="field-group"><textarea placeholder="Text Area"></textarea></div>
                <div class="field-group"><button>Save</button> <button>Cancel</button></div>
            `;
        };

        yesNoRadios.forEach(radio => {
            radio.addEventListener("change", function () {
                if (this.value === "yes") {
                    dropdown.style.display = "block";
                } else {
                    dropdown.style.display = "none";
                    clearDynamicFields();
                }
            });
        });

        testSelect.addEventListener("change", function () {
            clearDynamicFields();
            switch (this.value) {
                case "test1":
                    renderTest1Fields();
                    break;
                case "test2":
                    renderTest2Fields();
                    break;
                case "test3":
                    renderTest3Fields();
                    break;
            }
        });

        widget.addEvent("onLoad", function () {
            console.log("Widget loaded");
        });

        widget.addEvent("onRefresh", function () {
            console.log("Widget refreshed");
        });
    }

    return {
        init: init
    };
});
