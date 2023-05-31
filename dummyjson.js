window.addEventListener("DOMContentLoaded", init());


function init() {
    loadSelCat();
    loadSelBrand();
    document.querySelector('#selcat')
        .addEventListener('change',(e) => {
            //alert(e.target.value);
            loadProdsByCat(e.target.value)
        })
}

function loadProdsByCat(category) {
    fetch('https://dummyjson.com/products/category/' + category + "?limit=1000")
        .then(res => res.json())
        .then(ris => {
            let lstprods = ris.products;
            const mytb = document.createElement("table");
            mytb.setAttribute("class","tbprod");
            for (let p of lstprods) {
                let tr = document.createElement("tr");
                let tdtit = document.createElement("td");
                tdtit.innerHTML = "<h2>" + p.title+ "</h2>";
                let tdbrand = document.createElement("td");
                tdbrand.innerHTML = p.brand;
                let tdimg = document.createElement("td");
                tdimg.innerHTML = "<img style='max-width:250px;max-height:80px;' src='" + p.thumbnail + "'>"
                let tdprice = document.createElement("td");
                tdprice.innerHTML = p.price;
                let tddescr = document.createElement("td");
                tddescr.innerHTML = p.description;
                tr.appendChild(tdtit);
                tr.appendChild(tddescr);
                tr.appendChild(tdbrand);
                tr.appendChild(tdprice);
                tr.appendChild(tdimg);
                mytb.appendChild(tr);
            }
            const mymain = document.querySelector("main");
            mymain.innerHTML = "";
            mymain.appendChild(mytb);
        }
        );
}

function loadSelCat() {
    fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(arrayCat => { // arraycat=["smart","parfume","fragrances"]
            let htmlsel = "";
            arrayCat.sort();
            for (let i = 0; i < arrayCat.length; i++) {
                let opt = "<option value='" + arrayCat[i] + "'>"
                    + arrayCat[i] + "</option>";
                htmlsel += opt;
            }
            //recupero la select e gli inserisco tutti gli option
            document.querySelector("#selcat").innerHTML = htmlsel;
            let cat =document.querySelector("#selcat").value;
            loadProdsByCat(cat);
        }
        );
}

function loadSelBrand() {
    fetch('https://dummyjson.com/products/?limit=1000&select=brand')
        .then(res => res.json())
        .then(arrayObjBrand => {
            // arraycat={products:[{id:1,brand:"Apple"},{id:2,brand:"Oppo"},..."smart","parfume","fragrances"]
            // metto le mani sulla select
            const selbrand = document.querySelector("#selbr");
            //creo lista vuota
            let tmpList = [];
            //creo lista di oggetti products
            let lstProds = arrayObjBrand.products;
            //scorro un prodotto per volta
            for (let p of lstProds) {
                if (tmpList.indexOf(p.brand) == -1)
                    //se in tmplist non c'e' ancora lo metto 
                    tmpList.push(p.brand);
            }
            //creo lista vuota per ordinarla
            tmpSort = [];
            for (let brand of tmpList) {
                tmpSort.push(brand.toUpperCase());
            }
            tmpList = null;

            tmpSort.sort();
            for (let brand of tmpSort) {
                //creo un option
                let opt = document.createElement("option");
                opt.setAttribute("value", brand);
                opt.innerHTML = brand;
                selbrand.appendChild(opt);
            }
            //recupero la select e gli inserisco tutti gli option

        }
        );
}







