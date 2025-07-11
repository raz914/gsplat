import { Script as PcScript } from 'playcanvas'

// Camera position logger script
export class CameraPositionLogger extends PcScript {
  initialize() {
    this.logInterval = 0.1; // Log every 100ms to avoid spam
    this.lastLogTime = 0;
    this.lastPosition = null;
  }

  update(dt) {
    this.lastLogTime += dt;
    
    if (this.lastLogTime >= this.logInterval) {
      const position = this.entity.getPosition();
      
      // Only log if position has changed to avoid spam when not moving
      if (!this.lastPosition || 
          Math.abs(position.x - this.lastPosition.x) > 0.001 ||
          Math.abs(position.y - this.lastPosition.y) > 0.001 ||
          Math.abs(position.z - this.lastPosition.z) > 0.001) {
        
        console.log(`Camera Position: x=${position.x.toFixed(3)}, y=${position.y.toFixed(3)}, z=${position.z.toFixed(3)}`);
        this.lastPosition = { x: position.x, y: position.y, z: position.z };
      }
      
      this.lastLogTime = 0;
    }
  }
} 