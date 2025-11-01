import { Injectable } from '@angular/core';

/**
 * Centralized service for managing application assets (images, icons, etc.)
 * Provides type-safe paths to all assets without worrying about relative paths
 */
@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  // Base path for assets (leading slash ensures correct path from root)
  private readonly assetsPath = '/assets';

  /**
   * Application logos
   */
  readonly logo = {
    main: `${this.assetsPath}/bhaskarjyotishlogo3.png`,
  };

  /**
   * Icons and decorative images
   */
  readonly icons = {
    sun: `${this.assetsPath}/sun.png`,
    moon: `${this.assetsPath}/moon.png`,
  };

  /**
   * Get any asset path by name
   * @param assetName - Name of the asset file
   * @returns Full path to the asset
   */
  getAssetPath(assetName: string): string {
    return `${this.assetsPath}/${assetName}`;
  }
}
