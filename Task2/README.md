# TASK1 - Terminal Chaos

## Overview
The main gist of the task is to navigate your way through the files and branches provided in the github repository using commands such as cd,ls,git branch -r,git checkout etc. 

## Part 1
- `ls` and `cd` were bestfriends throughout this whole project, guiding my way through each directory and file to find required clues
- The Eolian Caves contained many entrances and routes which would be impossible to go through otherwise if it werent for the help of the command 

```bash
ls -lh
```

which was quickly replaced with 

```bash
find
```
- `find` gave me a more detailed and enhanced view of the entire folder instead of just one directory and its contents like `ls`.

Soon itself i found the `parchment.txt` lying in Entrance03. 

- to open i made use of `nano` the text editor which was installed using the terminal by the command:

```bash
sudo apt install nano
```

then i copied the text file to Handbook folder i made using 

```bash
mkdir Handbook
```

and copied the file using:

```bash
cp parchment.txt <path_where_want_to_save>
```

Did not understand what it was supposed to mean so went to bash64 to decode it and realised it was the starting of a link to some github repository!

- (didnt need medallion.py)

## Part 2

To switch to Light branch i used :

```bash
git branch -r
```

then to move into the branch i desired:

```bash
git checkout <name_of_branch>
```

then the same four paths were shown, this time i used `find` to locate where there were flora and the desired herbs to make the holy spell.

To search through the contents of all the files in the Eolian Caves i used:

```bash
grep -i -e "holy" -e "good" <path>
```
then found `Moonbloom` and `Mistveil` as the herbs that meet the criteria.

- edited the names according to instruction to make `holy spell` and defeat `kharnok` whose position was found while using `find` command.
- he dropped the `Celestic Veil Amulet' which contains the code required in dark realms.
- acquired the `Light book`.

## part 3

- This part was fairly easy due to the familiarity from previous levels
- used find to locate chests
used python3 to run the files:

```bash
python3 chest<number>.py
```
-Thus receiving the codes from the two chests.

## part 4
- now in posession of all the three books and the parchment, joining them together and decoding use bash64:

```bash
echo "code_to_cipher" | base64 -d 
```

## part 5

- In the GodSuite repository the commits were the only thing to check to get to the correct timeline before push where we get the code to the \'To-the-stars-and-realms-unseen\' repository.
- the codes used where:

```bash
git revert <commit_hash>
```
and then other subsidary commands to `add` and `-m commit`.  

- in the end we get a base64 code to the link to end repository.
- and then finally we run the `victory.py` file after updating python version to become the global user:

```bash
git config --global user.name "mithun-krishna"
```
and the final run using:

```bash
python3 victory.py --run
```

## Conclusion

The task was mainly made in focus to tackle the idea of grasping the important commands of the terminal which later on is really important in various activities ahead. The task was able to acheive this through an interesting and very engaging fun quest based story theme.

---
