// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GlobeComponent } from "echarts-gl/components";

echarts.use([GlobeComponent, CanvasRenderer]);