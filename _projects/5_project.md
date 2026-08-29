---
layout: page
title: OCT Speckle Denoising with Diffusion Models
description: DDPM-based denoising for OCT medical images
img: assets/img/proj_oct.jpg
importance: 5
category: research
related_publications: true
---

Research assistant work at The Chinese University of Hong Kong, advised by Prof. Wu Yuan.

## Overview

_Multiplicative Speckle Noise Denoising of OCT Medical Images Based on Diffusion Models_

This work develops a DDPM-based denoising method for speckle noise in optical coherence tomography (OCT) medical images to improve diagnostic accuracy.

## Key Components

- **DDPM denoising**: noise modeling and diffusion training pipelines for OCT speckle removal
- **Efficiency**: enhanced convergence speed and prediction efficiency
- **Comprehensive benchmarks**: reproduced DnCNN, U-Net, BM3D, TCFL-OCT, and DDPM baselines for comparative evaluation
- **Metrics**: Python scripts computing PSNR, SSIM, and GCMSE

<!-- Replace the image below with a figure from the project (e.g., denoising comparison). -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj_oct.jpg" title="Denoising comparison" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Denoising comparison. To be replaced with a figure from the project.
</div>
