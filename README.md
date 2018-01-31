FE-November Team: Mogo Template
===============
Build: [https://witflash.github.io/mogo-nov-team-1/](OPEN THE BUILD)


Install
-----------------
```
git clone https://github.com/MateAcademy-FE-July/mogo-nov-team-1.git && cd mogo-nov-team-1
npm install
```

Launch
-------
Run this command in terminal
```
gulp
```
Navigate to [http://localhost:3000](http://localhost:3000)

How to work with this repo:
---------------------------

* #### If you want to start work on your new feature, please, follow these steps:
1. `git pull` to get fresh master branch
2. `git checkout -b VM-my-new-feature` to create new branch. ****VM**** is your initials.
3. `gulp` to start gulp watching your changes. Now page is available on [http://localhost:3000](http://localhost:3000)
4. make some magic with html, js and add some styles with scss :)
5. `git status` to see files that were changed
6. `git add my-changed-file` to add file which will be commited
7. `git commit -m 'add awesome new feature' -m 'additional information about what was changed'` to create commit with changed files. Please, provide informative commit messages, so that it will be easy to understand, what you've changed in this commit
8. `git push origin VM-my-new-feature` to push your commit to remote branch.
9. Repeat step `7` & `8` until you finish your new feature. Don't hesitate to do as much commits, as you wish. It is better to do small commits with small working changes than one huge commit with 1000+ changed lines.
10. Visit repo [github page](https://github.com/MateAcademy-FE-July/mogo-nov-team-1). Now you can see flash message which offers you to create *****New Pull Request***** . Let's create it! :) 
11. After approving your pull request, you will be allowed to merge your pull request with master branch. 
12. `git checkout master`
13. `git pull` to get fresh master with your new feature. After that go back to step 2 and start to work on your next feature

* #### Everybody is working on their own section so, please, follow structure rules:

  For example if you create first section:
    * add styles to `src/style/sections/_section-first.scss`
    * include your style file into common scss `src/style/main.scss` using string like this `@import 'sections/_section-first';`
    * add your styles for different devices into `src/style/responsive/responsive.scss`
    * add html markup `src/template/_parts/_section-first.html`
    * include your section into common html `src/template/index.html` using string like this `{% include "_parts/_section-first.html" %}` ;)

* #### If yo want add your icon into iconfont.
    * add .svg icon into `src/icon/`;
    * run `gulp iconfont` in terminal.
    * use classes to display icons `<span class='icon-facebook'></span>`
    * `facebook` it name of your .svg image

* #### Please, when you create pull request, add screenshot in the description, so that all your teammates can see, what you've done, without pulling your branch  

* #### You are always welcome to watch through your mates' pull requests and leave some comments:
  * Please, always be polite. 
  * If you want to suggest better solution for some code, write your comment with code example.
  * Write your comments on the line, where you think that something wrong. 
  * If you think, that pull request is perfect, please, add comment or smile under pull request, so that all the other teammates can see, that you reviewed this pull request
