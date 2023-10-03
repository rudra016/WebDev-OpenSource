# Contributing to WebDev-Source

Thank you for your interest in contributing to WebDev-Source! We welcome contributions from the community and appreciate your help in making our project better.

## Signup/Register for Hacktoberfest

Sign up via the hacktoberfest account as a contributor at https://hacktoberfest.com/

## Ways of Contributing

You can contribute to the repository in following ways:

- Creating Issue
- As a designer
- Creating Pull Request for Issues.
- All of the above

### Creating Issue

Lets use know about the issue you have found in WebDev-Source by submitting [issue.](https://github.com/rudra016/WebDev-OpenSource/issues/new)

_We would like to request you to add the relevant `title`, `description` and any other `media file` that would be easier to understand the issue that you have submitted._

### As a Designer

- Create a PR under the folder "designs" that will be available at the root of this repository
- Wait for your PR to get accepted

    _Note: Setting up project, making changes and creating pull request is describe [below](#fork-clone-change-and-pull-request)._

### Creating Pull Request for Issues

- In the [issues](https://github.com/rudra016/WebDev-OpenSource/issues) section of the [WebDev-Source](https://github.com/rudra016/WebDev-OpenSource), you can see all the avaliable issue in the repository

- Feel free to checkout all the issue, and request the author to assign you the issue(_if not assigned_).

- After author have assigned you issues, make the necessary changes and open pull request as shown in [below](#fork-clone-change-and-pull-request).

## Fork, Clone, Change and Pull Request
### Setting up Repository

1. Click over the **`fork`** button of the repository.

   ![](/resources/fork_button.png)

2. Click **`Create Fork`** button below down.

   ![](/resources/new_fork.png)

3. Copy the **`ssh clone url`**.

   ![](/resources/clone_url.png)

4. Cloning the forking repository using `git clone` command.

   ![](/resources/clone.png)

### Adding Changes

1.  Create a new branch and switch it.

    ```bash
    git checkout -b <branch-name>
    ```

    <i>
    Note:

    - `branch_name` must be relavent to the changes you are doing.\*

    - If you are changing ` README`` files then  `branch_name`can be`readme`

    </i>

2.  Make your changes and commit them.

    Once you have created your branch, make your changes and commit them. Remember to keep your commits atomic, that is, each commit should represent a single unit of change. Also, remember to write helpful commit messages, so that someone can understand what the commit does just from reading the message without having to read the diff.

    For examples,

    ```bash
    git add filename [filename ...]
    git commit -m "descriptive message of what you did"
    ```

3.  Push up your changes. 

    Push your changes to your fork. Do this by running

    ```bash
    git push origin <branch-name>
    ```

    _Note: If the branch isn't present in the github rather present in your local machine then you can run `git push -u origin <branch-name>`_

### Submitting Pull Request

If you then go to your fork on GitHub, you should see a button to create a pull request from your branch.

![](/resources/pull_request.png)

Once doing this, you will be presented with a page. This page will show you the diff of the changes. Double check them to make sure you are making a pull request against the right branch.

- Enter a descriptive title in the title field. This is very important, as it is what will show up in the pull request listing and in email notifications to the people in the repo. Pull requests with undescriptive titles are more likely to be passed by.

  ![](/resources/create_pullrequest.png)
