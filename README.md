### How do I collaborate on a team development project?


Ask the creator of the team code repository to add you to the repository as a collaborator. 

Use Git to make a local copy of the repositroy on your computer. That will allow you to make small but significant changes and share them with the team without breaking anything. 

First, think about where you want to store the repository on your computer.

For the rosciper project, you can I store it here:

```git
C:\Users\s1900123\rosciper
```

To create that folder or directory on your computer use the Windows Command Prompt.

To start Windows Command Prompt click the magnifying glass icon on the bottom left corner of your screen.

Type “command prompt” into the Windows search (click the magnifying glass icon on the bottom left corner of your screen).

As you begin to type the search result will appear above.  Click the Command Prompt icon highlighted in blue to open the app. 

Understand that, to work from the command prompt, you should be in the correct directory. The folder that you’re in at any given time is known as the present working directory or PWD.

Your command prompt might open in the H drive so the cursor prompt may look like this:

```git
    H:\>
```

To move to the C drive type this:

```git
    C:
```

Now the cursor prompt looks like this:

```git
    C:\>
```

Now type the following to move to the Users directory:

```git
    cd users
```

Your cursor prompt will look like this:

```git
    C:\Users>
```

Now type the following (using your own student ID number) to enter your user directory:

```git
    cd s100123
```

Your cursor prompt will look like this:

```git
    C:\Users\s1900123>
```

If you want to see a list of the folders that are already in the directory, type the following:

```git
    dir
```

To create a local Git folder for the Rosciper project type:

```git
    git init rosciper
```

To confirm that you created the folder properly, check the current directory again by typing:

```git
    dir
```

You should now see the same list of folders as before, with the new rosciper folder added.

Move into the rosciper folder by typing:

```git
    cd rosciper
```

You're cursor will look like this:

```git
    C:\Users\s1900529\rosciper>
```

You might not be able to see it, and you don’t need to see it but there is a hidden .git folder in the rosciper directory. This folder contains all the git magic that makes all this work. 

Get a local copy of the project from Github by typing:

```git
    Git pull https://github.com/devendrk/Rosciper
```

You’ll see something like this in your terminal window:

```git
    remote: Enumerating objects: 34, done.

    remote: Counting objects: 100% (34/34), done.
    remote: Compressing objects: 100% (25/25), done.
    remote: Total 34 (delta 7), reused 33 (delta 6), pack-reused 0
    Unpacking objects: 100% (34/34), done.
    From https://github.com/devendrk/Rosciper
    branch HEAD -> FETCH_HEAD
```

Since we created the directory with git init, there is no default remote, no origin. You need to set it up by yourself. Type:

```git
    git remote add origin https://github.com/devendrk/Rosciper
```

Type the following to check that you have set the remote to origin:

```git
    git remote
```

You should see the following response:

```git
    origin
```

You're good to go!


### Making changes and building new features


Confirm that you are in the correct directory by typing:

```git
    cd
```

You'll see the following:

```git
    C:\Users\s1900529\rosciper>
```

If you see something else, you are in the wrong directory and you will have to use the `cd` command sequence detailed above to move to the correct directory.

Once you are in the correct directory, type the following to see that you are on the master branch:

```git
    git branch
```

You’ll see the following:

```git
    * master
```
This means you are on the master branch. 

**IMPORTANT!!!** Create a new branch to start working on the code and making any changes. You should work on one thing at a time, and have a dedicated branch for anything your working on. Small, discrete changes are a good thing.

Create a new branch by typing branch followed by whatever descriptive term you want to call your branch like game_logic_branch or countdown_view_branch. So:

```git
    git branch <your branch name- don't include the < > tags!>
```

**IMPORTANT!!!** To work on your new branch (and not the master branch) you must check out the new branch. Use the same branch name you used to create the branch to check it out. So type:

```git
    git checkout <your branch name- don't include the < > tags!>
```

To see what files and folders are available to work on type:

```git
    dir
```

Type the name of the file you want to work on. I want to update the README.md so I simply type the following:

```git
    README.md
```
That file automatically launches in my Visual Studio Code.


## how to add commit and push after I make some changes ?


To check your status to see any of the files that you have changed type:

```git
    git status
```
  Now all files recently changed will appear in RED color.

To prepare all the changed files to be committed type:

```git
   git add .
```

To make sure the right files have been prepared type:

```git
    git status
```

All recently ADDED files will appear in GREEN color.

Committing your changes means saving them along with details about what you have changed. Do this often. You and other developers will be able to read through the commit messages to understand why the changes were made. As you learn to use Git, you will also be able to use our commit history to undo major changes, try different solutions, etc. 

To commit your changes type the following command with a descriptive commit message:
   
```git
   git commit -m "type your commit message here"
```

To check your status again type:

```git
    git status
```

There will be an message stating everything is up to date. If not try `git add --all` to add all the files to staging.

To share the changes you've made on your branch to the team you will have to push your local repository to the remote repository on Github.

The *first time* you push your branch type:

```git
    git push -u origin <your branch name without including the < > tags>
```

That -u flag will set an upstream branch to track with your local branch. Don't worry if you don't get this yet. After the first time you push a branch, you can push without the -u flag so type:

```git
    git push origin <your branch name without including the < > tags>
```

**IMPORTANT !!!**

It is good practice to keep your local repo up to date with the remote repo. Before you `git push`, you can first `git pull` from the remote repository to your local master branch. This will help to avoid merge conflicts. We'll provide more detail about this later!

### Happy coding :)

:facepunch: :v: :hand: :fu: