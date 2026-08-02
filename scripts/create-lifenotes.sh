#!/bin/bash

echo -n "What number is this lifenote? "
read number

echo -n "What month is this lifenote? "
read month
lowercase_month=`echo "$month" | awk '{ print tolower($1) }'`

echo -n "What year is this lifenote? "
read year

echo "Lifenotes #$number: $month $year"

mkdir ./src/images/posts/lifenotes-$number

touch ./src/content/posts/lifenotes-$number.mdx

echo "---
title: \"Lifenotes #$number: $month $year\"
subtitle: \"\"
author: Carolina Gilabert
date: 
readingTime: 
tags: [\"lifenotes\"]
ogImage: \"/lifenotes-$number.jpg\"
---

import { Image } from \"astro:assets\";
import $lowercase_month from \"@images/posts/lifenotes-$number/$lowercase_month.png\";

<Image
  src={$lowercase_month}
  alt=\"Collage of pictures from $month $year: \"
  widths={[600, 900]}
  sizes=\"(max-width: 600px) 600w, 900w\"
/>
" > ./src/content/posts/lifenotes-$number.mdx