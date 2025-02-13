import { extensions, ExtensionType } from '@pixi/core';
import type { ExtensionMetadata, ISystem } from '@pixi/core';

/**
 * Renderer system extension example.
 * This doesn't do anything meaningful, but it shows how to create a system extension.
 */
class MySystem implements ISystem
{
    /** Metadata to install the extension */
    static extension: ExtensionMetadata = {
        name: 'mySystem',
        type: ExtensionType.RendererSystem,
    };

    /** Required init */
    init()
    {
        // eslint-disable-next-line no-console
        console.log('[MySystem] init');
    }

    /** Required destroy */
    destroy()
    {
        // eslint-disable-next-line no-console
        console.log('[MySystem] destroy');
    }
}

// Register the extension
extensions.add(MySystem);

export { MySystem };
