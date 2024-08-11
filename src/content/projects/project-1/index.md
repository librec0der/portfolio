---
title: "LibreWeb"
summary: "Web Tools for making web free"
date: "Aug 11 2024"
draft: false
tags:
- Astro
- Javascript
- Tailwind
- DaisyUI
demoUrl: https://libreweb.vercel.app
repoUrl: https://github.com/librec0der/libreweb
---
V2Ray Subscription Generator Tool

This tool provides a convenient way to generate V2Ray configuration files and convert Google Drive links into direct download links. It is designed for users who need to create V2Ray subscriptions and quickly share or download files from Google Drive.

Features:
V2Ray Subscription Generator:

Input multiple V2Ray configurations, with one per line.
Automatically encodes the configurations in base64 format.
Combines the encoded configurations into a single file.
Allows users to name the file and download it directly in .bin format.
Google Drive Direct Link Converter:

Paste a Google Drive file or document link into the provided input field.
The tool extracts the file ID from the link and generates a direct download link.
The direct link can be easily copied to the clipboard with a single click.
How It Works:
V2Ray Input: Users can enter multiple V2Ray URIs, each on a new line. The tool encodes these URIs into base64 and prepares them for download as a binary file.
Filename Customization: Users can specify the filename for the download, making it easy to manage multiple configuration files.
Google Drive Conversion: The tool checks the validity of the Google Drive link, ensuring it matches the expected format before generating the direct link. If the link is invalid, the tool notifies the user.
This tool simplifies the process of creating and managing V2Ray configurations and sharing Google Drive files, making it an essential utility for both technical and non-technical users.