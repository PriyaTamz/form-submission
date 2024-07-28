var div = document.createElement("div");
div.className = "main";

function createLabel(tagname, attribute_name, attribute_value, content) {
    var label = document.createElement(tagname);
    label.setAttribute(attribute_name, attribute_value);
    label.innerHTML = content;
    return label;
}

function createBreak() {
    return document.createElement("br");
}

function createInput(tagname, className, attrName, attrValue, attrName1, attrValue1, attrName2, attrValue2, placeholder) {
    var input = document.createElement(tagname);
    input.setAttribute(attrName, attrValue);
    input.setAttribute(attrName1, attrValue1);
    input.setAttribute(attrName2, attrValue2);
    input.className = className;
    if (placeholder) {
        input.setAttribute("placeholder", placeholder);
    }
    return input;
}

function createButton(type, className, textContent) {
    var button = document.createElement('button');
    button.type = type;
    button.className = className;
    button.textContent = textContent;
    return button;
  }

function genderInput(tagname, atrname, atrvalue, atrname1, atrvalue1, atrname2, atrvalue2, atrname3, atrvalue3) {
    var input = document.createElement(tagname);
    input.setAttribute(atrname, atrvalue);
    input.setAttribute(atrname1, atrvalue1);
    input.setAttribute(atrname2, atrvalue2);
    input.setAttribute(atrname3, atrvalue3);
    return input;
}


function create_td(tagname, content) {
    var td = document.createElement(tagname);
    td.innerHTML = content;
    return td;
}

var form = document.createElement("form");
form.id = "form";

var firstNameLabel = createLabel("label", "for", "first-name", "First Name:");
var firstNameInput = createInput("input", "padding", "type", "text", "id", "first-name", "required", "required", "First Name");

var lastNameLabel = createLabel("label", "for", "last-name", "Last Name:");
var lastNameInput = createInput("input", "padding", "type", "text", "id", "last-name", "required", "required", "Last Name");

var addressLine1Label = createLabel("label", "for", "address", "Address Line 1:");
var addressLine1Input = createInput("input", "padding", "type", "text", "id", "address1", "required", "required", "Address Line 1");

var addressLine2Label = createLabel("label", "for", "address", "Address Line 2:");
var addressLine2Input = createInput("input", "padding", "type", "text", "id", "address2", "required", "required", "Address Line 2");

var pinLabel = createLabel("label", "for", "pincode", "Pin Code:");
var pinInput = createInput("input", "padding", "type", "text", "id", "pincode", "required", "required", "Pin Code");

var genderParagraph = document.createElement("p");
genderParagraph.innerHTML = "Gender:";
genderParagraph.style.marginTop = "5px";
var maleInput = genderInput("input", "type", "radio", "id", "male", "name", "gender", "value", "Male");
var maleLabel = createLabel("label", "for", "male", "Male");
var femaleInput = genderInput("input", "type", "radio", "id", "female", "name", "gender", "value", "Female");
var femaleLabel = createLabel("label", "for", "female", "Female");

var foodParagraph = document.getElementById("description");
foodParagraph.textContent = "Choice of Food: (must choose at least 2 out of 5)";

var northInput = createInput("input", null, "type", "checkbox", "id", "North Indian", "name", "food");
var northLabel = createLabel("label", "for", "North Indian", "North Indian");
var southInput = createInput("input", null, "type", "checkbox", "id", "South Indian", "name", "food");
var southLabel = createLabel("label", "for", "South Indian", "South Indian");
var chineseInput = createInput("input", null, "type", "checkbox", "id", "Chinese", "name", "food");
var chineseLabel = createLabel("label", "for", "Chinese", "Chinese");
var japaneseInput = createInput("input", null, "type", "checkbox", "id", "Japanese", "name", "food");
var japaneseLabel = createLabel("label", "for", "Japanese", "Japanese");
var seaInput = createInput("input", null, "type", "checkbox", "id", "Sea Food", "name", "food");
var seaLabel = createLabel("label", "for", "Sea Food", "Sea Food");

var stateLabel = createLabel("label", "for", "state", "State:");
var stateInput = createInput("input", "padding", "type", "text", "id", "state", null, null, "State");

var countryLabel = createLabel("label", "for", "country", "Country:");
var countryInput = createInput("input", "padding", "type", "text", "id", "country", null, null, "Country");

var submitButton = createButton("button", "btn btn-secondary", "Submit");
submitButton.type = "button"; 
submitButton.style.padding = "5px";
submitButton.style.width = "415px";

submitButton.addEventListener("click", function() {
    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var foodElements = document.querySelectorAll('input[name="food"]:checked');
    var foods = [];
    for (var i = 0; i < foodElements.length; i++) {
        foods.push(foodElements[i].id);
    }
    if (foods.length < 2) {
        alert("Please select at least 2 food options.");
        return;
    }
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    var table = document.querySelector(".table tbody");
    var row = document.createElement("tr");

    row.appendChild(create_td("td", firstname));
    row.appendChild(create_td("td", lastname));
    row.appendChild(create_td("td", address1 + ", " + address2));
    row.appendChild(create_td("td", pincode));
    row.appendChild(create_td("td", gender));
    row.appendChild(create_td("td", foods.join(", ")));
    row.appendChild(create_td("td", state));
    row.appendChild(create_td("td", country));

    table.appendChild(row);

    document.getElementById("first-name").value = '';
    document.getElementById("last-name").value = '';
    document.getElementById("address1").value = '';
    document.getElementById("address2").value = '';
    document.getElementById("pincode").value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    var foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    for (var i = 0; i < foodCheckboxes.length; i++){
        foodCheckboxes[i].checked = false;
    }
    document.getElementById("state").value = '';
    document.getElementById("country").value = '';
});

var firstNameDiv = document.createElement("div");
firstNameDiv.className = "form-group";
firstNameDiv.append(firstNameLabel, createBreak(), firstNameInput);

var lastNameDiv = document.createElement("div");
lastNameDiv.className = "form-group";
lastNameDiv.append(lastNameLabel, createBreak(), lastNameInput);

var address1Div = document.createElement("div");
address1Div.className = "form-group";
address1Div.append(addressLine1Label, createBreak(), addressLine1Input);

var address2Div = document.createElement("div");
address2Div.className = "form-group";
address2Div.append(addressLine2Label, createBreak(), addressLine2Input);

var pinDiv = document.createElement("div");
pinDiv.className = "form-group";
pinDiv.append(pinLabel, createBreak(), pinInput);

var genderDiv = document.createElement("div");
genderDiv.className = "form-group";
genderDiv.append(genderParagraph, maleInput, maleLabel, femaleInput, femaleLabel);

var foodDiv = document.createElement("div");
foodDiv.className = "form-group";
foodDiv.append(foodParagraph, northInput, northLabel, createBreak(), southInput, southLabel, createBreak(), chineseInput,chineseLabel, createBreak(), japaneseInput, japaneseLabel, createBreak(), seaInput, seaLabel);

var stateDiv = document.createElement("div");
stateDiv.className = "form-group";
stateDiv.append(stateLabel, createBreak(), stateInput);

var countryDiv = document.createElement("div");
countryDiv.className = "form-group";
countryDiv.append(countryLabel, createBreak(), countryInput);

form.append(
    firstNameDiv, createBreak(),
    lastNameDiv, createBreak(),
    address1Div, createBreak(),
    address2Div, createBreak(),
    pinDiv, createBreak(),
    genderDiv, createBreak(),
    foodDiv, createBreak(),
    stateDiv, createBreak(),
    countryDiv, createBreak(),
    submitButton, createBreak()
);

document.body.append(form);

function create_th(tagname, content) {
    var ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}

function create_tr() {
    var row = document.createElement("tr");
    return row;
}

function create_td(tagname, content) {
    var ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}

var table = document.createElement("table");
table.className = "table";

var thead = document.createElement("thead");
var thead_tr = create_tr();

var th1 = create_th("th", "First Name");
var th2 = create_th("th", "Last Name");
var th3 = create_th("th", "Address");
var th4 = create_th("th", "Pincode");
var th5 = create_th("th", "Gender");
var th6 = create_th("th", "Food");
var th7 = create_th("th", "State");
var th8 = create_th("th", "Country");

thead_tr.append(th1, th2, th3, th4, th5, th6, th7, th8);
thead.append(thead_tr);

var tbody = document.createElement("tbody");

table.append(thead, tbody);
div.append(table);
document.body.append(div);