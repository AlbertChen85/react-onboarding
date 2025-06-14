# Mini Jira

Light-weight task management system.

# Set-up pre-commit hook

```sh
pip install pre-commit
pre-commit install
git config --unset-all core.hooksPath
```

# Available endpoints
- (Get) `/api/v1/task` - List all tasks
- (POST) `/api/v1/task` - Create a new task
- (GET) `/api/v1/task/{task_id}` - Get a specific task by ID
- (PUT) `/api/v1/task/{task_id}` - Update a specific task by ID
- (DELETE) `/api/v1/task/{task_id}` - Delete a specific task by ID
- (GET) `/api/v1/task-status` - Get all available task statuses

# Feature

- List view for showing tasks with name and status. User can sort and filter the task.
- Create/Edit page for add/edit the task with those properties
  - Task name
  - Task status
  - Description
  - (Plus) Miro-like borad for describe the task by sticker and flow.
- Light/Drak mode
