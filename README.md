### How do I collaborate on a team development project?


Ask the creator of the team code repository to add you to the repository as a collaborator. 

Use Git to make a local copy of the repository on your computer. This will allow you to make small but significant changes and share them with the team without breaking anything. 

First, think about where you want to store the repository on your computer.

For the rosciper project, you can store it here:

```git
    C:\Users\s1900123\rosciper
```

To create that folder or directory on your computer use the Windows Command Prompt.

To start Windows Command Prompt click the magnifying glass icon on the bottom left corner of your screen.

Type `command prompt` into the Windows search (click the magnifying glass icon on the bottom left corner of your screen).

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

To create a local clone of the Rosciper project repository type:

```git
    git clone https://github.com/devendrk/Rosciper.git
```

This creates a local folder for the project, adds a hidden git folder to that folder and pulls the repository code to your local computer. 

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
    C:\Users\s1900123\rosciper>
```

You might not be able to see it, and you don’t necessarily need to see it but there *is* a hidden .git folder in the rosciper directory. This folder contains the git magic that makes everything work. 

```
Type the following to see that the remote has automatically been set to origin:

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
    C:\Users\s1900123\rosciper>
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

**IMPORTANT!!!** Create a new branch to start working on and making any changes to the repo. You should work on one task at a time, and have a dedicated branch for any task you're working on. Small, discrete changes are a good thing!

Create a new branch by typing branch followed by a term descriptive of the task you plan to work on like game_logic_branch or countdown_view_branch. So:

```git
    git branch <your branch name- don't include the < > tags!>
```

**IMPORTANT!!!** To work on your new branch (and not the master branch) you must `check out` the new branch. Use the same branch name you used to create the branch to check it out. So type:

```git
    git checkout <your branch name- don't include the < > tags!>
```

To see what files and folders are available to work on type:

```git
    dir
```

Type the name of the file you want to work on. If the file you need doesn't exist yet, type a name for the file, hit enter, and that file will be created. To update the existing README.md file type:

```git
    README.md
```
That file automatically launches in my default IDE (Visual Studio Code).

Start doing stuff!


## how to add commit and push after I make some changes ?

You should frequently commit the changes you make. Committing your changes means saving them locally along with a message what you have changed. Do this often. You and other developers will be able to read through the commit messages to understand why the changes were made, undo major changes, try different solutions, etc. 

You must specify which changed files you want to include in a commit. To check which files you have changed type:

```git
    git status
```

The names of the files you have changed while working on the branch will now appear in RED.

To stage *all* the changed files to be committed type:

```git
   git add .
```

To make sure the right files have been staged type:

```git
    git status
```

The names of all the files you just staged will now appear in GREEN.

To commit your changes type the following command with a descriptive commit message:
   
```git
   git commit -m "<type your commit message here without including the < > tags>"
```

To check your status again type:

```git
    git status
```

You will see a message stating everything is up to date. 

To share the committed changes to the team you will `git push` the commits staged in your branch to the remote repository on Github.

The *first time* you push your branch type:

```git
    git push --set-upstream origin <your branch name without including the < > tags>
```

The next time you want to push the branch, type:

```git
    git push origin <your branch name without including the < > tags>
```

You will now see your changes on the remote repository and you can make a pull request!

**IMPORTANT !!!**

It is good practice to keep your local repo up to date with the remote repo. Before you `git push`, you can first `git pull` from the remote repository to your local master branch. This will help to avoid merge conflicts. We'll provide more detail about this later!

### Happy coding :)

:facepunch: :v: :hand: :fu: