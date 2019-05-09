### How can I work on and possibly contribute code to a team development project?

- Use Git to make a local copy of the project on your computer.That will allow you to make small but significant changes to a project and share them with the team without breaking anything.

First, think about where you want to store the project on your computer.

I stored mine here:

```git
C:\Users\s1900123\rosciper
```

- To create that folder or directory on your computer use the Windows Command Prompt.

- To start Windows Command Prompt click the magnifying glass icon on the bottom left corner of your screen.

- Type “command prompt” into the Windows search (click the magnifying glass icon on the bottom left corner of your screen).

- As you type the search result will appear and click the Command Prompt icon highlighted in blue to open the app.My app always opens up in the H drive so the cursor prompt looks like this:

```git
    H:\>
```

- Understand that, to work from the command prompt, you should be in the correct directory. The folder that you’re in at any given time is known as the present working directory or PWD.

To move to the C drive I type this:

```git
    C:
```

Now the cursor prompt looks like this:

    C:\>

Now type the following to move to the Users directory:

    cd users

Your cursor prompt will look like this:

    C:\Users>

Now type the following (using your own student ID number) to enter your user directory:

    cd s100123

Your cursor prompt will look like this:

    C:\Users\s1900123>

If you want to see a list of the folders that are already in the directory, type the following:

    dir

To create a local Git folder for the Rosciper project type:

    git init rosciper

To confirm that you created the folder properly, check the current directory again by typing:

    dir

You should now see the same list of folders as before, with the new rosciper folder added.

Move into the rosciper folder by typing:

    cd rosciper

You might not be able to see it, and you don’t need to see it but there is a hidden .git file in the rosciper folder on your computer.

Get a local copy of the project from Github by typing:

    Git pull https://github.com/devendrk/Rosciper

    You’ll see somehting like this in your terminal window:

    remote: Enumerating objects: 34, done.

    remote: Counting objects: 100% (34/34), done.
    remote: Compressing objects: 100% (25/25), done.
    remote: Total 34 (delta 7), reused 33 (delta 6), pack-reused 0
    Unpacking objects: 100% (34/34), done.
    From https://github.com/devendrk/Rosciper

```git
 branch HEAD -> FETCH_HEAD
```

Type the following to see that you are currently in the master branch:

    git branch

You’ll see the following:

    * master

IMPORTANT!!! Create a new branch to start working on the code and making any changes. You should work on one thing at a time, and have a dedicated branch for anything your working on. Small, discrete changes are a good thing.

Create a new branch by typing branch followed by whatever descriptive term you want to call your branch like game_logic_branch or countdown_view_branch. So:

    git branch countdown_view_branch

<span style="color: red"> IMPORTANT!!! </span>To work on your new branch (and not the master branch) you must check it out. So type:

```git
git checkout countdown_view_branch
```

Obviously you must use the same branch name you used to create the branch to check it out.
