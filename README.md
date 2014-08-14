#Image Janitor
Image Janitor is a tool that removes unused Images from your stylesheets. It works across multiple files and supports CSS Backgroung Images.

##How It Works?

The process by which Image Janitor removes the unused images is as follows:

1. Your specify your 3 directory's or an array of folders and a callback.
2. We grab all images paths and cache them as the original copy then filter all your HTML and CSS sources for matching paths if theres a match we take it off our list of images until we get to the end or our list or the list is empty.

