---
author: Abdul Hanan
pubDatetime: 2023-06-06T10:00:35Z
title: Explaining the kd tree and how we implemented in our program
postSlug: kd-tree
featured: true
ogImage: blog-images/kdtree.png
tags:
- Java
- XML
description: A kd tree, short for k-dimensional tree, is a data structure used for visualizing, navigating, searching, and route planning on maps. in this blog i try to summarize my understanding.

---

A kd tree, short for k-dimensional tree, is a data structure used for visualizing, navigating, searching, and route planning on maps. In our project, we implemented a map of Denmark using Java and data from OpenStreetMap, and the kd tree played a crucial role in its success.

## What is a kd tree ?

A kd tree is an extension of the binary search tree (BST) to multiple dimensions. While a BST is a one-dimensional tree, a kd tree can have k dimensions, where k can be 2 for a 2D map or even higher for more complex applications. Essentially, a kd tree is a tree that operates in multiple dimensions, as opposed to a BST which operates in a single dimension.

## BST and KD tree are essentially the same.

The core idea behind a kd tree is similar to that of a BST. It uses a hierarchical structure where each node represents a point in the space. However, in a kd tree, the space is divided along different dimensions at each level of the tree. For example, in a 2D kd tree representing a map, the space is divided along the x and y axes alternatively. This division enables efficient searching and insertion of points.

## how do we use it ? 

Inserting a point into a kd tree follows a process similar to a BST. 

This gets a bit more complex as we transition into more than 1 dimension because we now have to look at both dimensions when we are inserting f.eks. in the 2d space we have x and y and as we go to 3d space we have x,y,z and so forth.

Starting from the root, the algorithm compares the point's coordinates with the current node's partitioning dimension. Based on the comparison, the algorithm traverses the tree by moving left or right until it finds an empty leaf node, where the point is inserted.


We in our project were only tasked to build a 2d map and not a 3d map so we were only working with 2 dimensions luckily

### How does that work then ? 

Well when we work with more demensions we check for each demension one at a time when we are isnerting meaning that if we had a tree with 10,20 as it's first node and then we would like to insert node 8, 10 to the tree in the first layer of the tree we would look at the x values and as such we do normal BST comperison which shows that 8 is smaller then 10  as we compere in this layer and we insert the node to the left.

What about the next node ? do we still compare the x values ?
well the awnser is no we compare y nw as we chang e what we compare every insertation 
so we say  is 20 smaller then some number or larger if not we move to the next node on the left and compare its y and then if that is we add that node as the next left child 

### How does the searching work then ?

Searching in a kd tree also follows a similar process. Starting from the root, the algorithm compares the target point's coordinates with the current node's partitioning dimension. Based on the comparison, it traverses the tree by moving left or right until it finds a matching node or reaches an empty leaf node.

#### we can also do k nearest neighbor search


One of the advantages of a kd tree is its ability to perform k-nearest neighbor searches efficiently. 

Given a target point, a k-nearest neighbor search finds the closest k points to the target point. The algorithm starts at the root and recursively explores the tree, pruning subtrees that cannot contain closer points. By considering the partitioning dimensions and distances, it efficiently finds the k nearest neighbors.

## let us now look at our code and our implementation of the Kd tree

In our implementation, we focused on simplicity and ease of use. We created four separate classes: KdTree, KdNode, LatNode, and LonNode. The KdTree class serves as an interface and acts as a bridge between the other classes. The KdNode class represents the nodes of the kd tree, storing the point coordinates and references to the left and right children. The LatNode and LonNode classes are specialized nodes for latitude and longitude dimensions, respectively.
  
It's worth noting that while our implementation is recursive and easy to understand, recursive algorithms can consume more memory compared to iterative ones. If memory efficiency is a concern, alternative approaches could be explored.

our kd tree is a 2d tree in the sense that we only work with 2 dimensions x,y.

We in our java code choose to make 4 separate classes our kd tree 

```
KdTree - (package)
   -KdNode.java - (class)
   -Kdtree.java - (class)
   -LatNode.java - (class)
   -LonNode.java - (class)
```

The Kdtree class acts as a bridge that is used to call different classes therefore the class itself does not have any code but it is rather like a interface that uses the KDNode class an which inserts nodes into itself in a sense you can see more below.

<details close><summary>The kd tree java class</summary>


``` java
package org.map.model.KdTree;

import java.io.Serializable;
import org.map.model.OSM.Way;
import javafx.scene.canvas.GraphicsContext;

public class Kdtree implements Serializable {
    
    private KdNode root;
    private int size;
    
    public Kdtree() {
        this.size = 0;
    }
    
    // Insert a Way into the KdTree
    public void insert(Way way) {
        if (root == null) {
            root = new LatNode(); 
        }
        root.addWay(way);
        size++;
    }

    // Get the closest Node based on coordinates
    public Node get(float[] coords) {
        Node input = new Node(coords[0], coords[1], 0);
        Node closest = new Node(Float.MAX_VALUE, Float.MAX_VALUE, 0);
        return root.get(input, closest);
    }

    // Get the closest Node based on input Node
    public Node get(Node input) {
        Node closest = new Node(Float.MAX_VALUE, Float.MAX_VALUE, 0);
        return root.get(input, closest);
    }

    // Get the closest Node based on input and closest Nodes
    public Node get(Node input, Node closest) {
        return root.get(input, closest);
    }

    // Draw the KdTree within a specified box on a canvas
    public void draw(float[] box, GraphicsContext gc, Model model, MapCanvas canvas) {
        root.draw(box, gc, model, canvas);
    }
   
    public int getSize() {
        return size;
    }
}
```
</details>

<br>
<br>
<details close><summary>The kd Node java class</summary>


``` java
package org.map.model.KdTree;

import java.io.Serializable;
import java.util.ArrayList;

import org.map.model.Model;
import org.map.model.OSM.Node;
import org.map.model.OSM.Way;

import org.map.view.MapCanvas;

import javafx.scene.canvas.GraphicsContext;


public abstract class KdNode implements Serializable {
    protected Kdtree left, right;
    protected int n; // number of nodes
    protected ArrayList<Way> ways;
    protected int max = 170000;
    protected float[] key = new float[4];
    protected boolean isLeaf;


    public KdNode() {
        n = 0;
        ways = new ArrayList<Way>();
        isLeaf = true;
        // addWay(way);
        // this.maxDistance = (float) Math.sqrt((way.getBounds()[2] -
        // way.getBounds()[0])*(way.getBounds()[2] - way.getBounds()[0]) +
        // (way.getBounds()[3] - way.getBounds()[1])*(way.getBounds()[3] -
        // way.getBounds()[1]));
    }

    public Node get(Node input, Node closest) { // coords {lat, lon}
        if (isLeaf) {
            for (Way w : ways) {
                for (Node n : w.getNodes()) {
                    if (n.distance(input) < closest.distance(input)) {
                        closest = n;
                    }
                }
            }
        } else {
            int cmp = compareTo(new float[] { input.getLat(), input.getLon() });
            if (cmp > 0)
                closest = left.get(input, closest);
            else
                closest = right.get(input, closest);
            // closest = left.get(input, closest);
            // closest = right.get(input, closest);
        }
        return closest;
    }

    public void addWay(Way way) {
        if (isLeaf) {
            int index = 0;
            for (int i = 0; i < ways.size(); i++) {
                int cmp = compareTo(way.getBounds());
                if (cmp <= 0)
                    index = i;
            }
            ways.add(index, way);
            n += way.getNodes().size();
            if (n > max)
                split();
        } else {
            probagate(way);
        }
    }

    public void split() {
        float[] bounds = ways.get(ways.size() / 2).getBounds();
        key = new float[] { bounds[0], bounds[1] };
        for (Way w : ways)
            probagate(w);
        isLeaf = false;
        ways = null;
        n = 0;
    }

    private void probagate(Way way) {
        int cmp = overlap(way.getBounds());
        if (cmp >= 0)
            left.insert(way);
        else
            right.insert(way);
    }

    public void draw(float[] box, GraphicsContext gc, Model model, MapCanvas canvas) {
        if (isLeaf) {
            canvas.kdDraw(ways);
        } else {
            int cmp = overlap(box);
            if (cmp > 0)
                left.draw(box, gc, model, canvas);
            else if (cmp < 0)
                right.draw(box, gc, model, canvas);
            else {
                left.draw(box, gc, model, canvas);
                right.draw(box, gc, model, canvas);
            }
        }
    }


    public abstract int overlap(float[] box);

    // public abstract void split();
    public abstract int compareTo(float[] box);
}
```
</details>


We then have the KdNode and the two node classes for lon and lat nodes meaning for x and y in nodes in the tree. They are all both called from the KdNode class which is where these nodes are stored in left and right kdtree. and also assigned what they are what i mean by that is on insertion we call the insertion method on the kdnode which makes a recursive call to itself and then until we reach the leaf node we keep doing that and we call propagate which is a method that checks if a way is a left or right node and then adds them to the appropriate tree this is done until we reach a leaf node.



### let us look at the Lat node and Lon node classes.

they are very similar expect that we in the lat node class check for if a node is lat node and lon node checks if it is a lon node. we do this using overlap which is a abstract method that the lat node and lonnode class use as they are extensions of the kdnode when we call the function because of virtual dispatching we can call these functions appriopatly without every referencing them directly 

<br>
<details close><summary>The LatNode and LonNode java classes</summary>


``` java
package org.map.model.KdTree;


public class LatNode extends KdNode {
    LatNode() {
        super();
    }

    public int compareTo(float[] box) { //is that bigger than this ?
        if      (key[0] > box[0]) return 1;
        else if (key[0] < box[0]) return -1;
        else                        return 0;
    }

    public int overlap(float[] box) {
        if      (key[0] >= box[2]) return 1;
        else if (key[0] <= box[0]) return -1;
        else                      return 0; 
    }

    public void split() {
        this.left = new Kdtree(new LonNode());
        this.right = new Kdtree(new LonNode());
        super.split();
    }
}
```


``` java
package org.map.model.KdTree;

public class LonNode extends KdNode {
    LonNode() {
        super();
    }

    /*
     * key = {minlat, minlon, maxlat, maxlon}
     * box = {minlat, minlon, maxlat, maxlon}
     * 
     * compareTo returns -1 if the box is exactly to the right of the key line
     *           returns  1 if the box is to the left of the key line   
     */

    public int compareTo(float[] box) { //is that the {minlat, minlon} on the left or the right of the key line.
        if      (key[1] > box[1]) return 1;
        else if (key[1] < box[1]) return -1;
        else                        return 0;
    }

    public int overlap(float[] box) { // does the box overlap the key kine ?
        if      (key[1] >= box[3]) return 1;
        else if (key[1] <= box[1]) return -1;
        else                      return 0; 
    }

    public void split() { // initializes the right and left tree
        this.left = new Kdtree(new LatNode());
        this.right = new Kdtree(new LatNode());
        super.split();
    }
}
```
</details>