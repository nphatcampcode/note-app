import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <input
                type="checkbox"
                id="hide-checkbox"
                onClick={() =>
                    handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
                }
            ></input>
            <label for="hide-checkbox" class="toggle">
                <span class="toggle-button">
                    <span class="crater crater-1"></span>
                    <span class="crater crater-2"></span>
                    <span class="crater crater-3"></span>
                    <span class="crater crater-4"></span>
                    <span class="crater crater-5"></span>
                    <span class="crater crater-6"></span>
                    <span class="crater crater-7"></span>
                </span>
                <span class="star star-1"></span>
                <span class="star star-2"></span>
                <span class="star star-3"></span>
                <span class="star star-4"></span>
                <span class="star star-5"></span>
                <span class="star star-6"></span>
                <span class="star star-7"></span>
                <span class="star star-8"></span>
            </label>
        </div>
    );
};

export default Header;
