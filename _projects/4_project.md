---
layout: page
title: Segmentation with Noisy Labels via Diffusion Models
description: label-efficient segmentation using Stable Diffusion
img: assets/img/proj_ddpm.jpg
importance: 4
category: research
github: https://github.com/Shijie-Xiao/ddpm-segmentation
related_publications: true
---

Undergraduate thesis research at HKUST, advised by Prof. Yincong Chen.

## Overview

_Enhancing Segmentation from Datasets Containing Noisy Labels Using Generative Models_

This work improves image segmentation when training data contains noisy labels, using generative diffusion models. Built on the label-efficient semantic segmentation framework with diffusion models (ICLR 2022).

## Key Components

- **Noisy-label learning**: a novel approach for learning from noise-infused labels in both unsupervised and semi-supervised settings
- **Stable Diffusion**: unlabeled and noisy-labeled datasets utilized to improve segmentation performance
- **Evaluation**: segmentation quality validated on benchmark datasets

## Resources

- Code: [ddpm-segmentation](https://github.com/Shijie-Xiao/ddpm-segmentation) (fork of the label-efficient segmentation framework)

<!-- Replace the image below with a figure from the project (e.g., segmentation results comparison). -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj_ddpm.jpg" title="Segmentation results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Segmentation results. To be replaced with a figure from the project.
</div>
