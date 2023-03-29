export type boxGeometryArgs = [
  width: number,
  height?: number,
  depth?: number,
  widthSegments?: number,
  heightSegments?: number,
  depthSegments?: number
];

export type sphereGeometryArgs = [
  radius: number,
  widthSegments?: number,
  heightSegments?: number,
  phiStart?: number,
  phiLength?: number,
  thetaStart?: number,
  thetaLength?: number
];

export type cylinderGeometryArgs = [
  radiusTop: number,
  radiusBottom: number,
  height: number,
  radialSegments?: number,
  heightSegments?: number,
  openEnded?: boolean,
  thetaStart?: number,
  thetaLength?: number
];
