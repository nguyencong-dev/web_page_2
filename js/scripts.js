window.onload = function () {
  // ANIMATED MENU
  const nav = document.querySelector("nav");
  const hiden_menu = document.querySelector(".hiden_menu");
  const content = document.querySelector(".content");
  hiden_menu.onclick = function () {
    nav.classList.toggle("hide");
    content.classList.toggle("expand");
  };
  // SEARCH
  let input = document.getElementById("search");
  input.onchange = function () {
    let filter = input.value.toUpperCase();
    let table = document.getElementsByClassName("table_data")[0];
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
      let td = tr[i].getElementsByClassName("monhoc")[0];
      if (td) {
        let txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  // DELETE ROW
  let del = document.getElementsByClassName("delete");
  for (let d of del) {
    d.onclick = function () {
      let row = d.closest("tr");
      if (row) {
        row.parentNode.removeChild(row);
      }
    };
  }

  // EDIT
  let editButtons = document.getElementsByClassName("edit");

  for (let ed of editButtons) {
    ed.onclick = function () {
      let row = ed.closest('tr');
      let cells = row.querySelectorAll('td:not(:last-child)');
  
      cells.forEach((cell, index) => {
          let currentValue = cell.textContent;
          cell.innerHTML = `<input style="width:100%" type="text" value="${currentValue}">`;
      });
  
      // Hiển thị và ẩn các nút cần thiết
      row.querySelector('.save').style.display = 'inline';
      row.querySelector('.cancel').style.display = 'inline';
      ed.style.display = 'none';
      row.querySelector('.delete').style.display = 'none';
    };
  }
  

  // SAVE
  let saveButtons = document.getElementsByClassName("save");
  for (let sav of saveButtons) {
    sav.onclick = function () {
      let row = sav.closest("tr");
      let cells = row.querySelectorAll("td:not(:last-child)");
      let index = 0;
      for (let cell of cells) {
        let currentText = cell.textContent;
        let input = cell.querySelector("input, select");
        if (input) {
          cell.textContent = input.value;
        }
        index++;
      }
      row.querySelector(".edit").style.display = "inline";
      row.querySelector(".delete").style.display = "inline";
      row.querySelector(".save").style.display = "none";
      row.querySelector(".cancel").style.display = "none";
    };
  }

  // CANCEL
  let cancelButtons = document.getElementsByClassName("cancel");
  for (let can of cancelButtons) {
    can.onclick = function () {
      let row = can.closest("tr");
      let cells = row.querySelectorAll("td:not(:last-child)");
      let index = 0;
      for (let cell of cells) {
        let input = cell.querySelector("input, select");
        if (input) {
          cell.textContent = input.defaultValue;
        }
        index++;
      }
      row.querySelector(".edit").style.display = "inline";
      row.querySelector(".delete").style.display = "inline";
      row.querySelector(".save").style.display = "none";
      row.querySelector(".cancel").style.display = "none";
    };
  }

  // INSERT NEW ROW
  let insertRow = document.getElementById("new_row");
  insertRow.onclick = function () {
    let table = document
      .getElementsByClassName("table_data")[0]
      .getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();

    // Tạo và thêm các ô vào hàng mới với placeholder
    newRow.insertCell(
      0
    ).innerHTML = `<input type="text" placeholder="MSSV mới">`;
    newRow.insertCell(
      1
    ).innerHTML = `<input type="text" placeholder="Họ tên mới">`;
    newRow.insertCell(
      2
    ).innerHTML = `<input type="text" placeholder="Lớp mới">`;
    newRow.insertCell(
      3
    ).innerHTML = `<input type="text" placeholder="Khoa mới">`;
    newRow.insertCell(4).innerHTML = `<input type="date" value="2000-01-01">`;
    newRow.insertCell(5).innerHTML = `
        <select>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
        </select>`;
    newRow.insertCell(
      6
    ).innerHTML = `<input type="text" placeholder="Địa chỉ mới">`;
    newRow.insertCell(
      7
    ).innerHTML = `<input type="text" placeholder="2023-2024">`;

    // Tạo các nút "Edit", "Delete", "Save", và "Cancel"
    newRow.insertCell(8).innerHTML = `
      <button style="display: none" class="edit"><i class="fa-solid fa-pen"></i></button>
      <button style="display: none" class="delete"><i class="fa-solid fa-trash"></i></button>
      <button style="display: inline" class="save"><i class="fa-solid fa-floppy-disk"></i></button>
      <button style="display: inline" class="cancel"><i class="fa-solid fa-ban"></i></button>
    `;

    // Gán sự kiện cho các nút "Edit"
    let editButtons = document.getElementsByClassName("edit");
    for (let ed of editButtons) {
      ed.onclick = function () {
        let row = ed.closest("tr");
        let cells = row.querySelectorAll("td:not(:last-child)");
        let index = 0;

        for (let cell of cells) {
          let currentText = cell.textContent;
          if (index === 5) {
            cell.innerHTML = `
          <select>
            <option value="Nam" ${
              currentText === "Nam" ? "selected" : ""
            }>Nam</option>
            <option value="Nữ" ${
              currentText === "Nữ" ? "selected" : ""
            }>Nữ</option>
          </select>
        `;
          } else {
            cell.innerHTML = `<input type="text" value="${currentText}">`;
          }
          index++;
        }
        row.querySelector(".edit").style.display = "none";
        row.querySelector(".delete").style.display = "none";
        row.querySelector(".save").style.display = "inline";
        row.querySelector(".cancel").style.display = "inline";
      };
    }

    // Gán sự kiện cho các nút "Delete"
    let del = document.getElementsByClassName("delete");
    for (let d of del) {
      d.onclick = function () {
        let row = d.closest("tr");
        if (row) {
          row.parentNode.removeChild(row);
        }
      };
    }
    // Gán sự kiện cho các nút "Save"
    let saveButtons = document.getElementsByClassName("save");
    for (let sav of saveButtons) {
      sav.onclick = function () {
        let row = sav.closest("tr");
        let cells = row.querySelectorAll("td:not(:last-child)");
        let index = 0;
        for (let cell of cells) {
          let currentText = cell.textContent;
          let input = cell.querySelector("input, select");
          if (input) {
            cell.textContent = input.value;
          }
          index++;
        }
        row.querySelector(".edit").style.display = "inline";
        row.querySelector(".delete").style.display = "inline";
        row.querySelector(".save").style.display = "none";
        row.querySelector(".cancel").style.display = "none";
      };
    }

    // Gán sự kiện cho các nút "Cancel"
    let cancelButtons = document.getElementsByClassName("cancel");
    for (let can of cancelButtons) {
      can.onclick = function () {
        let row = can.closest("tr");
        let cells = row.querySelectorAll("td:not(:last-child)");
        let index = 0;
        for (let cell of cells) {
          let input = cell.querySelector("input, select");
          if (input) {
            cell.textContent = input.defaultValue;
          }
          index++;
        }
        row.querySelector(".edit").style.display = "inline";
        row.querySelector(".delete").style.display = "inline";
        row.querySelector(".save").style.display = "none";
        row.querySelector(".cancel").style.display = "none";
      };
    }
  };
};
