### Tasky

Task Management Application

A robust task management application built with the Frappe framework, showcasing my skills in building role-based access control systems and user-centric functionalities.
Key Features:

    Role-Based Access Control:
        Two distinct roles: Manager and Member.
        Managers can create tasks and have exclusive rights to update critical fields.
        Members can view and update task progress within assigned permissions.

    Automatic Field Updates:
        Tasks include an "Assigned By" field that is automatically populated with the manager's account who created the task.
        Real-time progress bar updates dynamically linked to the progress percentage field.

    Custom User Experience:
        Dynamic task filtering:
            Managers view all tasks.
            Members see tasks filtered specifically for their accounts.
        Users are automatically redirected to the tasks list upon login, ensuring a seamless workflow 
### Installation

You can install this app using the [bench](https://github.com/frappe/bench) CLI:

```bash
cd $PATH_TO_YOUR_BENCH
bench get-app $URL_OF_THIS_REPO --branch develop
bench install-app tasky
```

### Contributing

This app uses `pre-commit` for code formatting and linting. Please [install pre-commit](https://pre-commit.com/#installation) and enable it for this repository:

```bash
cd apps/tasky
pre-commit install
```

Pre-commit is configured to use the following tools for checking and formatting your code:

- ruff
- eslint
- prettier
- pyupgrade
### CI

This app can use GitHub Actions for CI. The following workflows are configured:

- CI: Installs this app and runs unit tests on every push to `develop` branch.
- Linters: Runs [Frappe Semgrep Rules](https://github.com/frappe/semgrep-rules) and [pip-audit](https://pypi.org/project/pip-audit/) on every pull request.


### License

mit
