/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.method.MovementMethod.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />

declare module android {
	export module text {
		export module method {
			export class ScrollingMovementMethod {
				public constructor();
				public left(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public right(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public up(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public down(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public pageUp(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public pageDown(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public top(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public bottom(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public lineStart(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public lineEnd(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public home(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public end(param0: android.widget.TextView, param1: android.text.Spannable): boolean;
				public onTouchEvent(param0: android.widget.TextView, param1: android.text.Spannable, param2: android.view.MotionEvent): boolean;
				public onTakeFocus(param0: android.widget.TextView, param1: android.text.Spannable, param2: number): void;
				public static getInstance(): android.text.method.MovementMethod;
			}
		}
	}
}