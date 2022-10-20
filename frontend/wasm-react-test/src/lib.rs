extern crate js_sys;
extern crate wasm_bindgen;

use js_sys::Array;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[wasm_bindgen]
pub fn subtract(a: i32, b: i32) -> i32 {
    a - b
}

#[test]
fn add_test() {
    assert_eq!(1 + 1, add(1, 1));
}