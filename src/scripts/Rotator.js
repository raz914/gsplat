import { Script as PcScript } from 'playcanvas'

// Simple rotation script for the splat
export class Rotator extends PcScript {
  update(dt) {
    this.entity.rotate(0, 15 * dt, 0)
  }
} 