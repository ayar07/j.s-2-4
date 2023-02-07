
const biograf = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    
for (key in data) {
    document.getElementById("shablon").innerHTML += `
    <li>Name: ${data[key].name};   Phone:   
    </li>`;}
    return data;
};
biograf();
