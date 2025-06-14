# Mini Jira

Light-weight task management system.

# Set-up pre-commit hook

```sh
pip install pre-commit
pre-commit install
git config --unset-all core.hooksPath
```

# Feature

- List view for showing tasks with name and status. User can sort and filter the task.
- Create/Edit page for add/edit the task with those properties
  - Task name
  - Task status
  - Description
  - (Plus) Miro-like borad for describe the task by sticker and flow.
- Light/Drak mode
