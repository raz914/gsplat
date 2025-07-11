import { Script as PcScript } from 'playcanvas'

// Gaussian Splat Loader script
export class GSplatLoader extends PcScript {
  initialize() {
    // Load the compressed PLY file as a Gaussian Splat
    this.loadGaussianSplat('/Coliving_1M.compressed.ply');
  }

  async loadGaussianSplat(url) {
    try {
      console.log('Loading Gaussian Splat:', url);
      
      // Use the correct asset type for Gaussian Splats
      this.app.assets.loadFromUrl(url, 'gsplat', (err, asset) => {
        if (err) {
          console.error('Error loading Gaussian Splat:', err);
          return;
        }
        
        console.log('Gaussian Splat loaded successfully:', asset);
        console.log('Asset data:', asset.resource);
        
        // Add GSplat component to entity
        this.entity.addComponent('gsplat', {
          asset: asset
        });
        
        // Try different scales to find the right size
        this.entity.setLocalScale(1.8, 1.8, 1.8);
        
        // Log debugging info
        console.log('Entity position:', this.entity.getPosition().toString());
        console.log('Entity scale:', this.entity.getLocalScale().toString());
        
                 // Get bounds after component is added
         setTimeout(() => {
           const gsplatComponent = this.entity.gsplat;
           if (gsplatComponent && asset.resource && asset.resource.aabb) {
             console.log('GSplat component:', gsplatComponent);
             const aabb = asset.resource.aabb;
             console.log('Model AABB center:', aabb.center.toString());
             console.log('Model AABB halfExtents:', aabb.halfExtents.toString()); 
             console.log('Model total size:', (aabb.halfExtents.x * 2).toFixed(2), 'x', (aabb.halfExtents.y * 2).toFixed(2), 'x', (aabb.halfExtents.z * 2).toFixed(2));
             
             // Calculate recommended camera distance
             const maxSize = Math.max(aabb.halfExtents.x, aabb.halfExtents.y, aabb.halfExtents.z);
             const recommendedDistance = maxSize * 3;
             console.log('Recommended camera distance:', recommendedDistance.toFixed(2));
           }
         }, 1000);
      });
      
    } catch (error) {
      console.error('Error in loadGaussianSplat:', error);
    }
  }
} 