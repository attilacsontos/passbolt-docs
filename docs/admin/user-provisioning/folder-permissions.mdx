# Passbolt’s unique approach to reach the full potential of folder permissions

## 1. Introduction

Finding the right information should be simple, not frustrating. When resources are hard to navigate, users lose valuable time searching. Passbolt folders streamline workflows, reduce clutter, and boost productivity. Built for maximum flexibility and control, folders let you organise passwords in the way that works best for you: making them quick and easy to locate.

```The goal of the folder feature is to provide a tool for Passbolt users to easily organize and share passwords.```

![](http://hdoc.csirt-tooling.org/uploads/upload_34d08af7e108515c7b78e3a03cd2692d.png)

Fig. 1: Passbolt’s password workspace with folders

With support for nested folders (or directories), you can arrange items in a structure that feels familiar, similar to how files are organised in a traditional file system.

In many other password managers, “folders” take the form of a vault, an archive encrypted with a single shared password for all users. Subfolders in these vaults often lack their permissions, making it impossible to define access at the individual item level.

Passbolt takes a different approach. At Passbolt, granular permissions are a core strength: every folder and password can have its own access rules. This ensures you can share only what is necessary while maintaining precise control over sensitive information.

## What is a folder?

A folder is an object created by a user or by the system. It can be empty, or it can contain folders and/or resources. A folder has a permission mask. Depending on permission mask values, the folder is either considered shared or personal. A folder permission mask defines two things:
* Permissions for the given folder.
* Permissions are applied to items inside it at their creation.

## Folder permissions

When working with folders, the question inevitably arises of how permissions, inheritance, and privileges change within folders when we want to move a certain item from one folder to another.

Folder permissions use the same system as resource permissions: users can assign a set of permissions to one or more folders while relying on familiar concepts they already know.

As with resources, each folder must have an owner defined in its permissions. Two additional permission types are available: update and read. Each type grants access to specific operations, as outlined in the table below:

![](http://hdoc.csirt-tooling.org/uploads/upload_08210477a49eabc5d9a11f0a291516cb.png)

Fig. 2: Basic folder permissions

Once an item is stored in a folder, its permissions are determined by the item itself rather than the folder, much like in a traditional file system. In most cases, moving an item from one folder to another requires the user to have update rights for both the item and the target folder.

![](http://hdoc.csirt-tooling.org/uploads/upload_ebddac82e378eee423bcddba4ba6c4ea.png)

Fig. 3: Folder permissions might change during certain operations

## Approach for shared and personal folders

Passbolt enables collaboration based on the overlap of what two or more users can access, while preserving each user’s control over items that are not shared.

This means that a password or folder can exist in only one folder at a time for a given user. However, the same item can appear in different folders for different users, as long as those users do not have access to both folders. In other words, an item can belong to multiple folders across the user base, but there is only one shared representation.

Users can also move shared folders within their folder structure (for example, to declutter their top-level folders) without affecting the folder’s location for other users.

In the example below, we have a folder A owned by Adam alone, a folder B owned by Bella alone, and a shared folder C owned by both Adam, Bella and readable by Carla. In this case, Adam can see folders A and C, whereas Bella can see both folders B and C, and Carla can only see folder C. 

![](http://hdoc.csirt-tooling.org/uploads/upload_9f788ef55cf8e461748f663894623f26.png)

**Scenario 1:**

What happens if Bella decides to share folder B with Adam? Since folder C can only be in one folder for Adam, Passbolt will consider that the folder is moved from A to C.

**Scenario 2:**

What happens if Carla (who only has read access on Folder C) moves folder C into folder B, and then decides to share folder B with Adam? In this case, Bella does not have the right to move C outside of A for Adam; therefore, sharing B with Adam will not move C for Adam.

Passbolt restricts users with read-only access from moving an item out of a folder they can view. In other words, they can only move an item in read-only mode if it is located at the root level.

## Approach to folder permissions inheritance

A key requirement is the ability to apply a folder’s permissions to the items it contains. For example, when a folder is shared, a new item is created inside it, or an existing resource is moved into it, the folder’s permissions are applied where possible.

The phrase “where possible” is important: folders in Passbolt help organise resources and suggest permissions, but they do not strictly enforce those permissions at all times. Exceptions can occur: an item may have more rights than its parent folder, or fewer, similar to hidden or restricted files inside a shared folder in a traditional file system.

Think of a folder’s permission list as a “permission mask”, a predefined set of user or group rights applied to its contents during interactions. Applying permissions to a folder is like selecting all shareable resources within it and setting new permissions for that selection. Items the user cannot access or modify are ignored.

This model also accommodates the constraints of end-to-end encryption, where only a user who already has access to a secret can grant that access to others.

### The advantages of the model:

It integrates seamlessly with the current permission system, it is simple to implement, and it does not slow down permission checks.

It is also easier to use and understand, as there is only one source of permissions: the item itself. When an item is created, the parent folder’s permissions are added to its permission list, unless they are later changed. This avoids hidden or locked permissions inherited from a folder that could limit a user’s ability to work with secrets.

It supports complex scenarios, such as building a folder tree where permissions are both expanded and restricted at different levels. For example, you can add a group or person to a folder’s permission mask to apply it to the folder’s resources, then remove access for someone in that mask or add someone not originally included.

### The disadvantages of the model:

There will be no enforced, persistent inheritance of permissions between folders. While in many cases an organisation will achieve inheritance naturally when applying permissions, it will not be guaranteed at all times. Enforcing inheritance while still allowing permissions to be added or removed directly on subfolders or resources is complex. The system will assist in setting permissions, but will not prevent exceptions from occurring.

This can lead to situations where, for example, a user listed as the owner of a folder cannot see all its contents. While this flexibility may be useful for some, it can be confusing for others, particularly those accustomed to a “vault” model.

Likewise, when two users share a folder but have different rights to the resources inside, the results of a share operation will vary. For example, if a resource is inside a shared folder but a user cannot see it or is not its owner, that resource will not be included in the permission changes when the folder is shared.

## Approach to personal & shared folder organizations

The simplest approach would be to enforce a single, unified tree structure for all users. In practice, however, this would make the software feel restrictive and promote a top-down taxonomy, which goes against the collaborative flexibility expected from real teamwork software.

Instead, Passbolt allows each item (a password or a folder) to exist in only one folder at a time for a given user. However, the same item can appear in different folders for different users, provided those users do not have access to both folders. In other words, an item can belong to multiple folders simultaneously across the user base.

A folder’s permission list is a predefined set of user or group rights that can be applied to the folder’s contents whenever a user interacts with them. Setting permissions on a folder is similar to selecting all resources within that folder that the user is allowed to share and applying a new set of permissions to them. Any items the user cannot access or modify will be excluded.

## Approach to folder permissions changes on a move

There are two types of moves: one that updates both permissions and the folder structure, and one that updates only the folder structure. Which type is applied depends on the permissions of the source and destination folders, as can be seen in the table below:

![](http://hdoc.csirt-tooling.org/uploads/upload_834cd7dbc6d120f59065dded26ebc226.png)

To move a folder into another, a user must have at least Update permission on both the destination folder and the origin folder. If the origin folder is read-only, the move is only possible if the folder is at the root level or its parent folder is not read-only. To modify permissions during the move, the user must own the origin folder and have at least Update permission on the destination folder.

## FAQ – Edge cases:

*An edge case is a situation, input, or scenario that happens only at the extreme ends (or "edges") of the expected operating conditions — often rare, unusual, or unlikely, but still possible. A system is used in an uncommon but valid way (e.g., a username with 255 characters). They are important in software testing because they can reveal bugs that won’t appear under normal, "average" conditions.*

**Scenario 1:**

What happens to the permission after we share a folder?

In the example below, Bella decides to share folder B with Adam. Since folder C can only be in one folder for Adam, Passbolt will consider that the folder is moved from A to C.

![](http://hdoc.csirt-tooling.org/uploads/upload_2f0829abb6325dc2919088c3cdbe291f.png)

**Scenario 2:** 

What happens if a user has read access to a folder and tries to move it to a different folder?

In the example below, Bella has read access to folder C and moves it into folder B. She then decides to share folder B with Adam. In this case, Bella does not have the permission to move folder C out of folder B for Adam. Therefore, sharing Folder B with Adam will not move folder C for him.

![](http://hdoc.csirt-tooling.org/uploads/upload_5f9b14c4a779af71cd9ada163cb6d179.png)

## Passbolt Folder Permissions: Secure and Flexible Access Management

Passbolt’s folder permission feature allows organizations to manage sensitive information with precision and ease. By controlling access at the folder level, teams can ensure that users only see and interact with the data they are authorized to access. This reduces the risk of accidental data exposure and streamlines collaboration, while maintaining clear accountability for all actions. 

Whether you are sharing passwords with a small team or across an entire organization, folder permissions provide a structured and secure way to manage access without complicating workflows.

### Key Benefits:

* **Granular Access Control**: Assign read-only or full access to specific folders, ensuring users only interact with the items they are permitted to.
* **Enhanced Security**: Minimize the risk of unauthorized data movement or exposure by restricting actions based on user permissions.
* **Simplified Collaboration**: Share folders with multiple users without worrying about accidental overwrites or changes to sensitive items.
* **Clear Accountability**: Track who can view, move, or edit items within each folder, improving auditability and transparency.
* **Flexible Sharing**: Adjust permissions at any time to accommodate changing team structures or project requirements.
* **Organized Data Management**: Keep sensitive credentials and resources neatly structured while controlling access hierarchically.

## Relevant Links:

1. [Introducing the new “Folders” feature](https://www.passbolt.com/blog/introducing-the-new-folders-feature)
1. [Roles and Permissions](https://www.passbolt.com/docs/admin/user-provisioning/roles-and-permissions/#approach-to-folder-permissions-inheritance)
1. [Passbolt Folders Feature - Functional Specifications](https://docs.google.com/document/d/1pSR97b5emJH5XxMME_lN4CqLUfYFuDw6DGCMJ_XjF-o/edit?tab=t.0)
