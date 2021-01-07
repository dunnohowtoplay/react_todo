import React from "react"

function MainContent() {
    return (
        <div>
            <input type="text" id="myInput" placeholder="Title..."></input>
            <span onclick="newElement()" class="addBtn">Add</span>
            <ul style={{listStyleType:"none"}}>
                <li>Hit the gym</li>
                <li>Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs</li>
                <li>Read a book</li>
                <li>Organize office</li>
            </ul>
        </div>

    )
}

export default MainContent