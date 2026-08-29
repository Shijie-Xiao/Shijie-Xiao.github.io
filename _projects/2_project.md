---
layout: page
title: "FAST-ML: Hybrid Physics-ML Tropical Cyclone Forecasting"
description: physics-informed neural networks for tropical cyclone intensity forecasting
img: assets/img/proj_fastml.jpg
importance: 2
category: research
github: https://github.com/Shijie-Xiao/FHLO
related_publications: true
---

Graduate research at the [Climate Risk & Extreme Dynamics Lab](https://sarhadi.eas.gatech.edu/), Georgia Tech, advised by Prof. Ali Sarhadi, sponsored by Sandia National Laboratories.

## Overview

_FAST-ML: A Hybrid Physics-Machine Learning Framework for Tropical Cyclone Intensity Forecasting_ (in preparation for JAMES)

This project develops a hybrid physics-ML framework that embeds neural networks into physics models for tropical cyclone intensity forecasting. Based on physics-informed neural networks (PINN) and the MIT FHLO forecasting system, the framework learns dynamic environmental parameters directly from 3D atmospheric data.

## Key Components

- **Hybrid physics-ML system**: neural networks embedded into physics models, preserving physical interpretability
- **Differentiable optimization**: dynamic environmental parameters learned directly from 3D atmospheric data
- **Performance**: outperforms the Google state-of-the-art in some cases

## Resources

- Code: [FHLO](https://github.com/Shijie-Xiao/FHLO) (reproduction of the MIT FHLO intensity forecasting model)
- Related: [TCG](https://github.com/Shijie-Xiao/TCG) (tropical cyclone genesis prediction)

<!-- Replace the image below with a figure from the project (e.g., intensity forecast curves or framework diagram). -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj_fastml.jpg" title="Framework overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Framework overview. To be replaced with a figure from the project.
</div>
