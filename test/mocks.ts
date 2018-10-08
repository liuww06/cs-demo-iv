export function createNavControllerMock() {
  return jasmine.createSpyObj('NavController', [
    'goBack',
    'navigateForward',
    'navigateRoot'
  ]);
}

export function createOverlayElementMock(name: string) {
  return jasmine.createSpyObj(name, ['dismiss', 'present']);
}

export function createOverlayControllerMock(name: string, element?: any) {
  return jasmine.createSpyObj(name, {
    create: Promise.resolve(element),
    dismiss: undefined,
    getTop: Promise.resolve(element)
  });
}

export function createPlatformMock() {
  return jasmine.createSpyObj('Platform', {
    ready: Promise.resolve()
  });
}

export function createStorageMock() {
  return jasmine.createSpyObj('Storage', {
    get: Promise.resolve(),
    ready: Promise.resolve(),
    remove: Promise.resolve(),
    set: Promise.resolve()
  });
}
