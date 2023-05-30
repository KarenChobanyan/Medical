export default function ButtonUsersMenu({ buttonHandler, state }) {

    return (
        <div className={state == false ? "openUsersMenuButton " : "closeUsersMenuButton"} onClick={buttonHandler}></div>
    )
}