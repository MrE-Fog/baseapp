import * as React from 'react';

interface LogoIconProps {
    className?: string;
    styles?: any;
}

export const LogoIcon: React.FC<LogoIconProps> = (props: LogoIconProps) => (
    <svg
        className={props.className}
        style={props.styles}
        fill="none"
        width="118"
        height="20"
        viewBox="0 0 118 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 5445 l0 -5445 6420 0 6420 0 0 5445 0 5445 -6420 0 -6420 0 0
-5445z m8596 1265 l80 0 52 -87 c185 -316 668 -1122 672 -1123 7 0 529 873
533 892 1 6 9 18 17 27 8 9 51 78 95 153 l80 138 458 0 c251 0 457 -3 457 -6
0 -3 -118 -197 -262 -432 -143 -235 -322 -526 -396 -647 -74 -121 -169 -276
-212 -345 -42 -69 -123 -200 -179 -293 l-102 -167 127 -208 c294 -478 375
-611 544 -887 178 -292 390 -636 448 -731 18 -28 32 -54 32 -58 0 -3 -206 -6
-457 -6 l-458 0 -24 43 c-13 23 -139 236 -281 472 -141 237 -291 490 -335 563
-43 72 -81 132 -84 132 -3 0 -168 -273 -366 -605 l-360 -604 -305 -3 c-168 -2
-374 -1 -458 2 l-152 5 191 310 c106 171 209 339 231 374 l39 64 -710 -8 -711
-7 -2 383 c-1 211 -2 400 -3 419 -1 19 -5 387 -9 816 l-7 781 93 6 c51 2 329
5 618 6 495 2 627 5 638 15 2 3 -22 47 -54 99 -42 69 -62 93 -73 89 -13 -4
-13 -2 -4 8 9 10 -1 33 -44 104 -31 50 -64 98 -74 108 -11 9 -19 22 -19 30 0
7 -23 49 -50 93 l-50 80 37 5 c21 3 191 4 378 3 187 -1 376 -3 421 -3z m-3356
-130 c0 -5 -4 -10 -10 -10 -5 0 -10 -9 -10 -21 0 -15 -5 -19 -15 -15 -8 3 -15
1 -15 -5 0 -14 43 -28 56 -18 8 6 14 4 18 -6 3 -8 1 -15 -4 -15 -12 0 -8 -63
5 -72 5 -4 -1 -11 -14 -16 -16 -6 -20 -11 -13 -16 7 -4 12 -11 12 -17 0 -12
-53 -12 -66 1 -5 5 -34 10 -64 11 -74 2 -90 0 -65 -10 18 -7 17 -9 -13 -25
-30 -15 -37 -14 -33 8 1 5 -4 6 -12 3 -23 -9 -43 9 -29 26 7 7 9 17 5 20 -10
11 20 8 37 -3 12 -8 12 -10 1 -10 -8 0 -12 -3 -8 -6 9 -10 48 7 41 17 -4 7 8
8 31 3 30 -5 37 -4 33 7 -3 8 -14 15 -26 17 -12 2 -22 10 -22 19 0 9 -6 13
-14 10 -8 -3 -17 0 -20 8 -2 7 2 16 10 19 8 3 14 1 14 -5 0 -6 4 -8 9 -5 5 3
8 19 7 36 -2 26 0 28 13 16 23 -19 54 -29 45 -14 -5 7 -2 9 9 5 12 -4 14 -2
10 10 -6 15 12 33 32 33 6 0 3 -4 -5 -10 -8 -5 -12 -12 -8 -15 10 -11 48 19
48 37 0 10 7 18 15 18 8 0 15 -4 15 -10z m659 -525 c118 -29 227 -70 321 -122
74 -41 190 -123 190 -134 0 -5 -38 -72 -83 -151 -46 -79 -99 -171 -118 -205
-19 -35 -38 -63 -42 -63 -5 0 -32 21 -60 46 -65 57 -251 149 -335 165 -40 7
-110 10 -190 6 -106 -4 -140 -10 -209 -34 -239 -86 -422 -286 -490 -535 -23
-83 -23 -266 1 -363 23 -96 95 -238 158 -308 103 -117 270 -219 411 -251 112
-26 282 -19 236 10 -8 5 -7 9 2 15 15 9 42 -9 33 -22 -3 -5 2 -9 10 -9 9 0 16
4 16 8 0 15 -37 43 -51 39 -8 -2 -11 -2 -6 1 4 2 12 13 18 24 10 18 8 19 -13
13 l-23 -7 22 19 23 20 -23 12 c-21 11 -21 11 5 8 20 -3 28 1 32 15 3 13 0 18
-8 15 -8 -3 -17 8 -24 30 -9 28 -8 38 4 50 18 18 18 21 -3 41 -16 16 -16 16
-10 -2 6 -14 4 -17 -8 -12 -9 3 -15 1 -14 -7 4 -33 0 -40 -18 -26 -15 12 -16
12 -10 -3 4 -12 2 -18 -8 -18 -8 0 -12 -6 -9 -14 9 -23 -11 -26 -25 -5 -11 18
-9 21 8 26 12 3 18 9 15 14 -3 5 -9 7 -14 4 -4 -3 -7 13 -5 36 3 32 1 39 -11
35 -9 -4 -12 -2 -8 5 4 8 -1 9 -15 4 -13 -4 -21 -2 -21 5 0 6 -5 8 -11 4 -7
-4 -10 -1 -7 7 3 8 15 16 28 17 18 3 20 6 9 13 -11 7 -11 9 3 9 9 0 19 -6 21
-12 4 -10 6 -10 6 -1 1 7 -8 18 -19 25 -11 7 -20 16 -20 21 0 4 5 5 10 2 6 -4
17 -2 25 5 21 18 79 -1 83 -28 2 -12 8 -22 13 -22 5 0 9 -9 9 -20 0 -11 6 -20
13 -20 16 0 15 52 -2 58 -9 3 -9 7 0 18 7 8 7 14 1 14 -5 0 -12 9 -15 21 -3
12 -9 19 -14 17 -4 -3 -16 3 -25 14 -10 10 -14 18 -9 18 6 0 13 -5 16 -10 10
-17 24 -2 18 20 -4 16 -8 18 -20 9 -10 -9 -17 -9 -25 -1 -8 8 -7 13 5 18 15 5
14 8 -5 24 l-22 18 29 6 c17 4 39 14 50 22 17 12 18 16 5 24 -8 5 -14 21 -15
37 0 24 -4 28 -30 28 -22 0 -30 -4 -29 -17 1 -11 -5 -18 -17 -18 -10 0 -19 3
-19 8 1 14 50 53 60 47 5 -3 10 1 10 9 0 11 -9 16 -30 16 -22 0 -28 4 -24 15
9 22 -5 18 -25 -6 -16 -20 -17 -20 -28 21 l-11 42 33 -4 c19 -2 31 0 28 5 -2
4 6 17 18 28 l24 20 8 -26 c9 -26 -1 -52 -10 -27 -7 18 -22 14 -19 -5 2 -14
13 -18 49 -18 26 1 47 -3 47 -7 0 -4 -6 -8 -12 -9 -10 0 -10 -2 0 -6 9 -3 7
-10 -9 -24 -24 -21 -19 -25 12 -9 15 9 19 7 19 -5 0 -8 11 -21 25 -27 14 -6
25 -16 25 -21 0 -6 3 -7 6 -4 4 4 1 14 -7 23 -13 16 -11 17 14 10 18 -4 26 -3
23 3 -4 5 3 9 15 8 17 -1 51 -37 35 -37 -3 0 -1 -11 4 -25 8 -20 7 -23 -8 -18
-14 5 -15 3 -4 -8 18 -20 15 -39 -10 -49 -13 -5 -17 -9 -9 -9 20 -1 -6 -31
-27 -31 -28 0 1 -19 43 -28 39 -8 54 -31 28 -39 -7 -3 -13 2 -13 11 0 9 -6 13
-15 10 -13 -5 -13 -9 1 -35 8 -16 21 -29 29 -29 8 0 16 -8 16 -17 1 -17 2 -17
6 0 3 10 16 22 30 28 l25 9 -4 155 c-5 154 -1 184 22 170 7 -4 111 -7 231 -6
l219 2 0 -479 0 -478 -82 -62 c-452 -340 -1122 -308 -1546 73 -27 25 -55 45
-61 45 -6 0 -11 5 -11 11 0 6 -22 36 -49 67 -279 324 -372 772 -243 1182 32
104 122 284 182 365 125 170 344 335 557 422 202 83 500 102 722 48z m-1806
-37 c9 -48 7 -447 -1 -452 -4 -2 -261 -7 -571 -11 -309 -4 -577 -11 -594 -16
-119 -34 -192 -170 -157 -293 15 -56 69 -119 124 -149 40 -21 48 -22 360 -19
175 1 323 5 327 8 5 3 9 1 9 -4 0 -5 27 -15 60 -21 33 -7 106 -35 163 -63 84
-43 116 -66 183 -132 66 -66 89 -99 127 -176 65 -132 81 -200 80 -345 0 -101
-4 -132 -26 -200 -79 -241 -288 -436 -527 -492 -53 -13 -168 -17 -641 -20
l-576 -5 -6 69 c-4 37 -7 146 -7 241 l0 172 133 1 c72 1 328 4 567 8 l435 6
47 28 c160 94 156 325 -7 415 -26 15 -80 18 -390 23 -342 5 -363 6 -426 28
-169 58 -328 191 -414 346 -110 197 -114 475 -10 673 73 139 185 246 337 324
139 71 136 71 708 77 283 3 554 7 601 9 l87 3 5 -33z"/>
<path d="M8419 5605 c-3 -2 -221 -5 -485 -7 -263 -1 -521 -4 -571 -6 l-93 -3
0 -235 0 -235 394 3 393 3 7 -232 c4 -128 5 -237 1 -243 -4 -6 -86 -10 -223
-10 -119 0 -295 -3 -389 -7 l-173 -6 0 -235 0 -235 584 7 585 7 3 -52 3 -52
109 179 c120 197 210 344 292 475 30 48 54 92 54 99 0 6 -68 123 -151 258 -83
136 -190 311 -237 390 -82 135 -92 148 -103 137z"/>
    </svg>
);
