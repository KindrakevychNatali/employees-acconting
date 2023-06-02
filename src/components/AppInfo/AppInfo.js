import "./AppInfo.css";

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Accounting current employees in company</h1>
            <h2>Total count of employees: {employees}</h2>
            <h2>Benefit will get: {increased}</h2>
        </div>
    )
}

export default AppInfo;