'use strict';

const compressObject = obj => 
    Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => (value !== undefined && value !== null && value !== ""))
    );