'use client';



import { useDraggable } from '@platejs/dnd';
import { Image, ImagePlugin, useMediaState } from '@platejs/media/react';
import { ResizableProvider, useResizableValue } from '@platejs/resizable';
import type { TImageElement } from 'platejs';
import type { PlateElementProps } from 'platejs/react';
import { PlateElement, withHOC } from 'platejs/react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Caption, CaptionTextarea } from './caption';
import { MediaToolbar } from './media-toolbar';
import {
  mediaResizeHandleVariants,
  Resizable,
  ResizeHandle,
} from './resize-handle';

export const ImageElement = withHOC(
  ResizableProvider,
  function ImageElement(props: PlateElementProps<TImageElement>) {
    const { align = 'center', focused, readOnly, selected } = useMediaState();
    const width = useResizableValue('width');

    const { isDragging, handleRef } = useDraggable({
      element: props.element,
    });

    return (
      <PlateElement {...props} className="py-2.5">
        <MediaToolbar plugin={ImagePlugin}>
          <figure className="group relative m-0" contentEditable={false}>
            <Resizable
              align={align}
              options={{
                align,
                readOnly,
              }}
            >
              <ResizeHandle
                className={mediaResizeHandleVariants({ direction: 'left' })}
                options={{ direction: 'left' }}
              />
              <Image
                ref={handleRef}
                className={cn(
                  'block w-full max-w-full cursor-pointer object-cover px-0',
                  'rounded-sm',
                  focused && selected && 'ring-2 ring-ring ring-offset-2',
                  isDragging && 'opacity-50'
                )}
                alt={props.element.alt as string | undefined}
              />
              <ResizeHandle
                className={mediaResizeHandleVariants({
                  direction: 'right',
                })}
                options={{ direction: 'right' }}
              />
            </Resizable>

            <Caption style={{ width }} align={align}>
              <CaptionTextarea
                readOnly={readOnly}
                onFocus={(e) => {
                  e.preventDefault();
                }}
                placeholder="Write a caption..."
              />
            </Caption>
          </figure>
        </MediaToolbar>

        {props.children}
      </PlateElement>
    );
  }
);
