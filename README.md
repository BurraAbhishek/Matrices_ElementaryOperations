# Matrices_ElementaryOperations
A website which allows you to play with elementary operations of matrices

## NOTE:
This website is still under development. When a functional build is fully tested, this site will be available on GitHub pages.

In the meanwhile, you can start using this website, but there are certain limitations as of now (includes instructions):
- Either git cloning or downloading the repository is required to use the site. It is currently unavailable in GitHub pages.
- At the moment, you'll need developer tools to change the matrix. (UPDATE: INITIAL SETUP FROM UI)
- The matrix is a two-dimensional array: `var m = [[R1C1, R1C2, ... R1Cn], [R2C1, R2C2, ... R2Cn], ... [RmC1, RmC2, ... RmCn]]`
- For example, to use `R1 = R1 + R2`, in your console, type `addRows(m, 0, 1)`.
- The default matrix included is the 3 X 3 identity matrix. To change it, assign another two-dimensional numerical array to variable `m`. (UPDATE: FIXED)
- To save your work locally, type `download_history()` in your console. To know more about how this works, see [my calculator repository on GitHub](https://github.com/BurraAbhishek/Standard-Calculator). Note that the file saving and uploading mechanisms are the same in both repositories. (UPDATE: ACCESSIBLE FROM UI)
- Can't manually toggle between light and dark mode if preferences saved to browser storage. In this case modify the values in your browser storage. For light mode, the value is `light` and for dark mode, it is `dark`. 
- The dropdown of options currently does nothing. (UPDATE: PARTIALLY FIXED)

All these bugs will be fixed in upcoming code changes.
