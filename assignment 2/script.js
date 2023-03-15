const studentData = [
  {
    id: 1,
    name: "Ritesh",
    attendance: true,
  },
  {
    id: 2,
    name: "Ram",
    attendance: false,
  },
  {
    id: 3,
    name: "Hari",
    attendance: true,
  },
  {
    id: 4,
    name: "Shyam",
    attendance: false,
  },
];

function fetchTable() {
  const tableBody = document.getElementById("tablebody");
  tableBody.innerHTML = studentData
    .map(({ id, name, attendance }) => {
      return `
          <tr>
            <th scope="row">${id}</th>
            <td>${name}</td>
            <td>
              <input
                id="checkbox${id}"
                type="checkbox"
                value="present"
                onclick="toggleAttendance(${id})"
                ${attendance ? "checked" : ""}
              />
            </td>
            <td class="remarks${id}" style="${
        attendance ? "background: beige;" : "background: red;"
      }">${attendance ? "Present" : "Absent"}</td>
          </tr>
        `;
    })
    .join("");
}

function toggleAttendance(_id) {
  studentData.forEach((student) => {
    if (student.id === _id) {
      if (student.attendance === false) {
        student.attendance = true;
      } else {
        student.attendance = false;
      }
    }
  });
  fetchTable();
}

fetchTable();
