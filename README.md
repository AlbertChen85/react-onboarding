# Mini Jira

Light-weight task management system.

# Feature
There's the list of features:
- List view for showing tasks with name and status. User can sort and filter the task.
- Create/Edit page for add/edit the task with those properties
  - Task name
  - Task status
  - Description
  - (Plus) Miro-like borad for describe the task by sticker and flow.
- Light/Drak mode

# Set-up
how to run-up this project:
1. `pnpm install` to install this project.
2. `pnpm run dev` to create a local run-time server with hot-reload.
3. go to `http://localhost:3000` to see if the project works.
4. trying to edit the `src/app/page.tsx` content in the browser changed.


pre-commit hook:
pre-commit is a tool for auto format the changed files while committing the change.
```sh
pip install pre-commit
pre-commit install
git config --unset-all core.hooksPath
```

# Available endpoints
- (Get) `/api/task` - List all tasks
- (POST) `/api/task` - Create a new task
- (GET) `/api/task/{task_id}` - Get a specific task by ID
- (PUT) `/api/task/{task_id}` - Update a specific task by ID
- (DELETE) `/api/task/{task_id}` - Delete a specific task by ID
- (GET) `/api/task-status` - Get all available task statuses
